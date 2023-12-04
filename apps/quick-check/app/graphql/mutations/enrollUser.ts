import { contentStack } from "~/contentstack.server";
import { DateTime } from "luxon";
import { pipe, shuffle } from "remeda";

import {
  andThen,
  getNodeInTreesById,
  invariant,
  logError,
  promiseWrapper,
  type QuestionItem,
  type TreeNode,
} from "quickcheck-shared";

import {
  graphql,
  type GQLProxyUserData,
  type User_Enrollment_Insert_Input,
  type User_Question_Insert_Input,
  type WithApolloClient,
} from "~/graphql";

import { ENROLLMENT_DAYS } from "~/utils/constants";
import { getNextValidBusinessDate, getToday } from "~/utils/date";
import { sendEnrollmentEmail } from "~/utils/email/sendEnrollmentEmail";

import { buildTaxonTrees, type TaxonomyDataObj } from "~/models/taxonomy";

/**
 * GraphQL
 */

export const ENROLL_USER = graphql(/* GraphQL */ `
  mutation EnrollUser($user_enrollment: user_enrollment_insert_input!) {
    insert_user_enrollment_one(object: $user_enrollment) {
      ...NotificationUserEnrollment
    }
  }
`);

/**
 * Prepare Taxon
 */

const getTaxon = async (taxonomy_id: string) => {
  const taxonTrees = await buildTaxonTrees();
  const taxon = getNodeInTreesById(taxonTrees, taxonomy_id);

  invariant(taxon, "No matching Taxon found.");

  return taxon;
};

/**
 * Prepare Questions
 */

const getQuestions = async (taxon: TreeNode<TaxonomyDataObj>) => {
  const descendantUids = taxon
    .getDescendants()
    .map(({ dataObj }) => dataObj.uid);

  const questions = await contentStack.getQuestionItems((query) =>
    query.containedIn("topic.uid", descendantUids),
  );

  invariant(questions, "No matching questions found.");

  return questions;
};

/**
 * Prepare Questions Input
 */

const prepareActiveQuestionGap =
  (minQuestionsPerDay: number) => (questionIndex: number) =>
    Math.floor((1 / minQuestionsPerDay) * Math.max(0, questionIndex));

const getEnrollmentPeriodInWeeks =
  (enrollmentBaseDate: Date) =>
  ({ expiration_date }: EnrollUserEnrollment) => {
    const enrollmentPeriodInWeeks =
      DateTime.fromJSDate(enrollmentBaseDate)
        .diff(DateTime.fromISO(expiration_date), ["weeks"])
        .toObject().weeks ?? 1;

    return Math.abs(Math.floor(enrollmentPeriodInWeeks));
  };

const getQuestionsPerDay =
  (questions: QuestionItem[]) => (enrollmentPeriodInWeeks: number) => {
    const enrollmentInitialSpreadDays =
      (enrollmentPeriodInWeeks * ENROLLMENT_DAYS) / 3;

    const minQuestionsPerDay = questions.length / enrollmentInitialSpreadDays;

    return minQuestionsPerDay;
  };

const prepareActiveQuestionsInput = (
  user_id: string,
  enrollment: EnrollUserEnrollment,
) => {
  return (questions: QuestionItem[]) => {
    const today = DateTime.now().toISODate()!;
    const enrollmentBaseDate =
      enrollment.start_date >= today
        ? new Date(enrollment.start_date)
        : new Date(today);

    const getActiveQuestionGap = pipe(
      enrollment,
      getEnrollmentPeriodInWeeks(enrollmentBaseDate),
      getQuestionsPerDay(questions),
      prepareActiveQuestionGap,
    );

    const activeQuestionsInput = questions.map(
      (question, questionIndex): User_Question_Insert_Input => {
        const activeQuestionGap =
          getActiveQuestionGap(questionIndex) -
          getActiveQuestionGap(questionIndex - 1);

        const activeDate = getNextValidBusinessDate(
          enrollmentBaseDate,
          activeQuestionGap,
        );

        return {
          user_id,
          question_id: question.uid,
          taxonomy_id: question.topic?.[0]?.uid,
          active_on: activeDate,
          title: question.title,
        };
      },
    );

    return activeQuestionsInput;
  };
};

/**
 * Prepare User Enrollment Input
 */

const prepareUserEnrollmentInput =
  (
    user_id: string,
    taxonomy_id: string,
    { enrollment_id, start_date, expiration_date }: EnrollUserEnrollment,
  ) =>
  (shuffledActiveQuestions: User_Question_Insert_Input[]) => {
    const userEnollmentInput: User_Enrollment_Insert_Input = {
      id: enrollment_id,
      start_date,
      expiration_date,
      user_id,
      taxonomy_id,
      user_questions: {
        data: shuffledActiveQuestions,
      },
    };

    return userEnollmentInput;
  };

/**
 * Enroll User
 */

export type EnrollUserEnrollment = {
  enrollment_id?: string;
  start_date: string;
  expiration_date: string;
};

export async function enrollUser(
  this: WithApolloClient,
  taxonomyId: string,
  enrollmentData: EnrollUserEnrollment,
  proxyData: GQLProxyUserData,
) {
  const { userId, now } = proxyData;

  const userEnrollmentInput = await pipe(
    getTaxon(taxonomyId),
    andThen(getQuestions),
    andThen(shuffle()),
    andThen(prepareActiveQuestionsInput(userId, enrollmentData)),
    andThen(prepareUserEnrollmentInput(userId, taxonomyId, enrollmentData)),
  );

  const [enrolledUser, error] = await promiseWrapper(
    this.client.mutate({
      mutation: ENROLL_USER,
      variables: { user_enrollment: userEnrollmentInput },
    }),
  );

  if (error || !enrolledUser) {
    logError({ error, log: "enrollUser" });
    return null;
  }

  const enrollment = enrolledUser.data?.insert_user_enrollment_one;

  return enrollment ?? null;
}
