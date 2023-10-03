import { DateTime } from "luxon";
import invariant from "tiny-invariant";

import {
  getUserApolloClientFromRequest,
  type GetUserData,
  type Learning_Record_Insert_Input,
  type User_Answer_Insert_Input,
  type User_Set_Input,
} from "~/graphql";

import { ANSWER } from "./answer";
import { getCurrentAnswer, getReviewedAnswer } from "./getAnswers";
import { getRetiredOn } from "./retireAnswer";

const getWeeklyStreak = (
  { weekly_streak, weekly_streak_since }: GetUserData,
  lastSunday: string,
) => {
  if (weekly_streak_since && weekly_streak_since >= lastSunday)
    return weekly_streak;

  const sundayBeforeLast = DateTime.fromISO(lastSunday)
    .minus({ week: 1 })
    .toISODate()!;
  if (weekly_streak_since && weekly_streak_since >= sundayBeforeLast)
    return weekly_streak + 1;

  return 1;
};

const getUpdatedWeeklyStreakData = (
  user: GetUserData,
): Pick<User_Set_Input, "weekly_streak" | "weekly_streak_since"> => {
  const lastSunday = DateTime.now()
    .startOf("week")
    .minus({ day: 1 })
    .toISODate()!;

  return {
    weekly_streak: getWeeklyStreak(user, lastSunday),
    weekly_streak_since: lastSunday,
  };
};

export const saveAnswer = async (request: Request) => {
  const userApolloClient = await getUserApolloClientFromRequest(request);

  const { currentAnswer, answerDate } = await getCurrentAnswer(request);

  const userQuestion = await userApolloClient.getUserQuestion(currentAnswer.id);
  invariant(userQuestion, "Question not found");

  const { reviewedAnswer, userQuestionNextActiveDate } = getReviewedAnswer(
    userQuestion,
    currentAnswer,
    answerDate,
  );

  const learningRecord: Learning_Record_Insert_Input = {
    user_id: userQuestion.user_id,
    event_type: ANSWER,
    data: reviewedAnswer,
  };

  const userAnswer: User_Answer_Insert_Input = {
    user_id: userQuestion.user_id,
    question_id: userQuestion.id,
    correct: currentAnswer.correct,
  };

  await userApolloClient.updateUserQuestion(userQuestion.id, {
    active_on: userQuestionNextActiveDate,
    retired_on: getRetiredOn(userQuestion, reviewedAnswer),
    latest_review_gap: reviewedAnswer.latestReviewGap,
    difficulty: reviewedAnswer.difficulty,
    streak: reviewedAnswer.streak,
    last_answered_on: reviewedAnswer.lastAnsweredOn,
  });

  await userApolloClient.updateUserEnrollment(userQuestion.user_enrollment.id, {
    score: reviewedAnswer.score,
  });

  await userApolloClient.createUserAnswer(userAnswer);

  const user = await userApolloClient.getUser();
  invariant(user, "User not found");

  await userApolloClient.updateUser(getUpdatedWeeklyStreakData(user));

  return await userApolloClient.createLearningRecord(learningRecord);
};
