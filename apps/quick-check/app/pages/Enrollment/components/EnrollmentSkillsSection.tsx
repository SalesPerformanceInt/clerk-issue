import { type FC } from "react";
import { useTranslation } from "react-i18next";

import {
  filter,
  groupBy,
  length,
  mapValues,
  pipe,
  prop,
  reduce,
  values,
} from "remeda";

import {
  EnrollmentSkillCard,
  EnrollmentSkillData,
  Section,
} from "quickcheck-shared";

import type { EnrollmentData } from "~/graphql";

import { useEnrollmentContext } from "~/pages/Enrollment";

type UserQuestion = EnrollmentData["user_questions"][number];

const getSkillData = (
  questions: UserQuestion[],
  skill: string | number | symbol,
): EnrollmentSkillData => {
  const questionsCount = length(questions);

  const answersCount = reduce(
    questions,
    (count, question) =>
      count + (question.user_answers_aggregate.aggregate?.count ?? 0),
    0,
  );

  const unanswered = answersCount <= 0;

  const baselineCount = pipe(
    questions,
    filter((x) => x.first_answer[0]?.correct === true),
    length(),
  );
  const currentCount = pipe(
    questions,
    filter((x) => x.current_answer[0]?.correct === true),
    length(),
  );

  const getSkillPercentage = (target: number) =>
    Math.round((target / questionsCount) * 100);

  return {
    skill: String(skill),
    baseline: getSkillPercentage(baselineCount),
    current: getSkillPercentage(currentCount),
    unanswered,
  };
};

export const EnrollmentSkillsSection: FC = () => {
  const { enrollment } = useEnrollmentContext();
  const { t } = useTranslation();

  const skills = pipe(
    enrollment.user_questions,
    groupBy(prop("taxonomy_name")),
    mapValues(getSkillData),
    values,
  );

  return (
    <Section
      title={t("common.skills")}
      tooltip={[
        t("enrollment.dashboard.skills.tooltip_baseline"),
        t("enrollment.dashboard.skills.tooltip_current"),
      ]}
    >
      {skills.map((skill) => (
        <EnrollmentSkillCard key={skill.skill} {...skill} />
      ))}
    </Section>
  );
};
