import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { twMerge } from "tailwind-merge";

import {
  Achievement,
  Card,
  CardTitle,
  type LeaderboardEntryProps,
} from "quickcheck-shared";

import { useDashboardContext } from "~/pages/Dashboard";

type AchievementsCardProps = {
  entries?: LeaderboardEntryProps[];
  className?: string;
};

export const AchievementsCard: FC<AchievementsCardProps> = ({ className }) => {
  const { t } = useTranslation();
  const { dashboard } = useDashboardContext();

  const attemptedSkills = dashboard.skills_attempted.aggregate?.count ?? 0;
  const totalSkills = dashboard.total_skills.aggregate?.count ?? 0;
  const attemptedSkillsPercentage = (attemptedSkills / totalSkills) * 100 || 0;

  const completedEnrollments =
    dashboard.completed_enrollments.aggregate?.count ?? 0;
  const totalEnrollments = dashboard.total_enrollments.aggregate?.count ?? 0;
  const completedEnrollmentsPercentage =
    (completedEnrollments / totalEnrollments) * 100 || 0;

  const retiredQuestions = dashboard.retired_questions.aggregate?.count ?? 0;
  const totalQuestions = dashboard.total_questions.aggregate?.count ?? 0;
  const retiredQuestionsPercentage =
    (retiredQuestions / totalQuestions) * 100 || 0;

  return (
    <Card className={twMerge("max-w-sm", className)}>
      <CardTitle title={t("common.achievements")} className="p-6 pb-0" />

      <section className="flex gap-4 p-6 h-full items-center justify-between">
        <Achievement
          percentage={attemptedSkillsPercentage}
          text={`${attemptedSkills}`}
          pathClassName="stroke-chart-1"
          label={t("user.dashboard.achievements.skills_attempted")}
        />
        <Achievement
          percentage={completedEnrollmentsPercentage}
          text={`${completedEnrollments}`}
          pathClassName="stroke-chart-2"
          label={t("user.dashboard.achievements.completed_enrollments")}
        />
        <Achievement
          percentage={retiredQuestionsPercentage}
          text={`${retiredQuestions}`}
          pathClassName="stroke-chart-3"
          label={t("user.dashboard.achievements.questions_retired")}
        />
      </section>
    </Card>
  );
};
