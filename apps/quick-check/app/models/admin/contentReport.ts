import { getContentStackClient } from "~/contentstack.server";
import { first, isArray, last } from "remeda";
import { stripHtml } from "string-strip-html";

import {
  getVariant,
  invariant,
  QuestionItemByTaxonomy,
} from "quickcheck-shared";

import { DEFAULT_LANGUAGE } from "~/contentstack";
import { getTaxon } from "~/graphql";

import { buildTaxonTrees } from "~/models/taxonomy";

export const getContentReport = async () => {
  const contentStack = getContentStackClient(DEFAULT_LANGUAGE);

  const questions = await contentStack.getQuestionItems();
  invariant(questions, "Questions not fetched");

  const taxonomies = await contentStack.getTaxonomies();
  invariant(taxonomies, "Taxonomies not fetched");

  const courses = await contentStack.getCourses();
  invariant(courses, "Courses not fetched");

  const questionsByTaxonomy = questions.reduce((acc, question) => {
    const questionsWithTaxonomy = question.topic.map((topic) => ({
      ...question,
      topic,
    }));
    return [...acc, ...questionsWithTaxonomy];
  }, [] as QuestionItemByTaxonomy[]);

  const taxonTrees = await buildTaxonTrees();

  const rows = await Promise.all(
    questionsByTaxonomy.map(async (question) => {
      const skillTaxonomyId = question.topic.uid;
      const skillTaxonomy = taxonomies.find(
        ({ uid }) => uid === skillTaxonomyId,
      );

      const taxon = await getTaxon(skillTaxonomyId, taxonTrees);
      const topLevelTaxon = last(taxon.getAncestors());
      const topLevelTaxonId = topLevelTaxon?.dataObj.uid;

      const course = courses.find(
        ({ metadata }) =>
          topLevelTaxonId &&
          isArray(metadata.quickcheck_taxonomy) &&
          first(metadata.quickcheck_taxonomy)?.uid === topLevelTaxonId,
      );

      const rootTaxonomy = isArray(course?.metadata.quickcheck_taxonomy)
        ? first(course?.metadata.quickcheck_taxonomy)
        : null;

      return {
        course_display_title: course?.metadata.display_title ?? null,
        root_taxonomy_title: rootTaxonomy?.title ?? null,
        skill_taxonomy_title: skillTaxonomy?.title,
        skill_taxonomy_display_name: skillTaxonomy?.display_name,
        question_title: question.title,
        question_stem: stripHtml(
          getVariant(question, "mcquestion")?.mcquestion.stem ?? "",
        ).result,
        question_id: question.uid,
      };
    }),
  );

  return rows;
};

export const contentReportHeaders = [
  {
    key: "course_display_title",
    label: "Course Display Title",
  },
  {
    key: "root_taxonomy_title",
    label: "Root Taxononomy Title",
  },

  {
    key: "skill_taxonomy_title",
    label: "Skill Taxononomy Title",
  },
  {
    key: "skill_taxonomy_display_name",
    label: "Skill Taxononomy Display Name",
  },
  { key: "question_title", label: "Question Title" },
  { key: "question_stem", label: "Question Stem" },
];
