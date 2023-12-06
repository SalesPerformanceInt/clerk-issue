import { DateTime } from "luxon";

import type { GetUserEmailData } from "~/graphql";

import type { EmailTemplate } from "./emailTemplatesMap";

/**
 * User Inactivity Check
 */

export const getUserInactiveTemplate = (
  user: GetUserEmailData,
  now?: string,
): null | EmailTemplate => {
  const today = now ? DateTime.fromISO(now) : DateTime.now();
  const userAnsweredOnce = !!user.last_user_answer;
  const userFirstEnrollment = user.first_user_enrollment;

  if (userAnsweredOnce || !userFirstEnrollment) return null;

  const isInactive =
    DateTime.fromISO(userFirstEnrollment.created_at).toISODate()! ===
    today.minus({ days: 7 }).toISODate()!;

  return isInactive ? { type: "Inactive", data: null } : null;
};

export const getUserAwayTemplate = (
  user: GetUserEmailData,
  now?: string,
): null | EmailTemplate => {
  const today = now ? DateTime.fromISO(now) : DateTime.now();
  const lastAnswered = user.last_user_answer?.created_at;

  if (!lastAnswered) return null;

  const isAway =
    DateTime.fromISO(lastAnswered).toISODate()! ===
    today.minus({ days: 7 }).toISODate()!;

  return isAway ? { type: "Away", data: null } : null;
};

/**
 * User Question Check
 */

export const getUserQuestionActivatedTemplate = (
  user: GetUserEmailData,
): null | EmailTemplate => {
  const isQuestionActivated = !!user.user_question_activated_today;

  return isQuestionActivated ? { type: "Question", data: null } : null;
};
