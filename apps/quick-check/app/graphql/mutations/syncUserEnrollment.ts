import { waitUntil } from "@vercel/functions"

import { getContentStackClient } from "~/contentstack.server"
import { DateTime } from "luxon"
import { pipe, shuffle } from "remeda"

import { andThen, invariant, logError, type QuestionItem, type TreeNode } from "quickcheck-shared"

import {
  EventInput,
  graphql,
  type GQLProxyAllData,
  type GraphQLClient,
  type User_Enrollment_Insert_Input,
  type User_Question_Insert_Input,
} from "~/graphql"

import { ENROLLMENT_DAYS } from "~/utils/constants"
import { getNextValidBusinessDate } from "~/utils/date"

import { getTranslatedQuestionsFromTaxon } from "~/models/question"
import { buildTaxonTrees, getDescendantUids, getTaxon, type TaxonomyDataObj } from "~/models/taxonomy"

/**
 * GraphQL
 */

export const SYNC_USER_ENROLLMENT = graphql(/* GraphQL */ `
  mutation SyncUserEnrollment($userEnrollment: user_enrollment_insert_input!, $tenantId: String!) {
    insert_user_enrollment_one(
      object: $userEnrollment
      on_conflict: { constraint: user_enrollment_pkey, update_columns: [start_date, expiration_date] }
    ) {
      ...NotificationUserEnrollment
      user_questions {
        ...BaseUserQuestion
      }
    }
    insert_tenant_one(object: { tenant_id: $tenantId }, on_conflict: { constraint: tenant_pkey, update_columns: [] }) {
      tenant_id
      theme_id
    }
  }
`)

const getQuestions = (language: string) => async (taxon: TreeNode<TaxonomyDataObj>) =>
  getTranslatedQuestionsFromTaxon(language, taxon)

/**
 * Prepare Questions Input
 */

const prepareActiveQuestionGap = (minQuestionsPerDay: number) => (questionIndex: number) =>
  Math.floor((1 / minQuestionsPerDay) * Math.max(0, questionIndex))

const getEnrollmentPeriodInWeeks =
  (enrollmentBaseDate: Date) =>
  ({ expiration_date }: EnrollUserEnrollment) => {
    const baseExpirationDate =
      expiration_date ?? DateTime.fromJSDate(enrollmentBaseDate).plus({ weeks: 12 }).toISODate()!

    const enrollmentPeriodInWeeks =
      DateTime.fromJSDate(enrollmentBaseDate).diff(DateTime.fromISO(baseExpirationDate), ["weeks"]).toObject().weeks ??
      1

    return Math.abs(Math.floor(enrollmentPeriodInWeeks))
  }

const getQuestionsPerDay = (questions: QuestionItem[]) => (enrollmentPeriodInWeeks: number) => {
  const enrollmentInitialSpreadDays = (enrollmentPeriodInWeeks * ENROLLMENT_DAYS) / 3

  const minQuestionsPerDay = questions.length / enrollmentInitialSpreadDays

  return minQuestionsPerDay
}

const prepareActiveQuestionsInput =
  (user_id: string, enrollment: EnrollUserEnrollment, taxon: TreeNode<TaxonomyDataObj>) =>
  (questions: QuestionItem[]) => {
    const descendantUids = getDescendantUids(taxon)

    const today = DateTime.now().toISODate()!
    const enrollmentBaseDate = enrollment.start_date >= today ? new Date(enrollment.start_date) : new Date(today)

    const getActiveQuestionGap = pipe(
      enrollment,
      getEnrollmentPeriodInWeeks(enrollmentBaseDate),
      getQuestionsPerDay(questions),
      prepareActiveQuestionGap,
    )

    const activeQuestionsInput = questions.map((question, questionIndex): User_Question_Insert_Input => {
      const activeQuestionGap = getActiveQuestionGap(questionIndex) - getActiveQuestionGap(questionIndex - 1)

      const activeDate = getNextValidBusinessDate(enrollmentBaseDate, activeQuestionGap)

      const topic = question.topic.find(({ uid }) => descendantUids.includes(uid))

      return {
        user_id,
        question_id: question.uid,
        taxonomy_id: topic?.uid,
        active_on: activeDate,
        title: question.title,
      }
    })

    return activeQuestionsInput
  }

/**
 * Prepare User Enrollment Input
 */

const prepareUserEnrollmentInput =
  (user_id: string, taxonomy_id: string, { enrollment_id, start_date, expiration_date }: EnrollUserEnrollment) =>
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
    }

    return userEnollmentInput
  }

/**
 * Enroll User
 */

export type EnrollUserEnrollment = {
  enrollment_id: string
  start_date: string
  expiration_date: string | null
  user_id: string
  topic_id: string
}

export async function syncUserEnrollment(
  this: GraphQLClient,
  taxonomyId: string,
  enrollmentData: EnrollUserEnrollment,
  proxyData: GQLProxyAllData,
) {
  try {
    const { userId, tenantId } = proxyData

    const taxonTrees = await buildTaxonTrees()
    const taxon = await getTaxon(taxonomyId, taxonTrees)

    const language = await this.getUserLanguage(proxyData)

    invariant(language, "No user language found.")

    const userEnrollment = await pipe(
      taxon,
      andThen(getQuestions(language)),
      andThen(shuffle()),
      andThen(prepareActiveQuestionsInput(userId, enrollmentData, taxon)),
      andThen(prepareUserEnrollmentInput(userId, taxonomyId, enrollmentData)),
    )

    const enrolledUser = await this.mutate({
      mutation: SYNC_USER_ENROLLMENT,
      variables: { userEnrollment, tenantId },
    })

    const enrollment = enrolledUser?.data?.insert_user_enrollment_one

    invariant(enrollment, "No enrollment found.")

    const questionScheduledEvents = enrollment.user_questions.map(
      (question): EventInput => ({
        type: "QuestionScheduled",
        data: {
          enrollment_id: enrollment.id,
          question_id: question.id,
          taxonomy_id: question.taxonomy_id,
          attempts: question.attempts.aggregate?.count ?? 0,
          scheduled: question.active_on!,
        },
      }),
    )

    waitUntil(this.createEvents(questionScheduledEvents, proxyData))

    return enrollment ?? null
  } catch (error) {
    logError({ error, log: "syncUserEnrollment" })
    return null
  }
}

export type SyncUserEnrollment = NonNullable<Awaited<ReturnType<typeof syncUserEnrollment>>>
