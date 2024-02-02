import { Suspense, useState, type FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "@remix-run/react";

import { TypedAwait } from "remix-typedjson";

import {
  Card,
  CardSkeleton,
  CardTitle,
  ProgressItem,
  type CardProps,
} from "quickcheck-shared";

import type { UserDashboardActiveEnrollments } from "~/graphql";

import { useUserDashboardContext } from "../context/UserDashboardContext";

/**
 * Active Enrollments Suspense Component
 */

type ActiveEnrollmentsSuspenseProps = {
  activeEnrollmentsPromise: Promise<UserDashboardActiveEnrollments | null>;
};

export const ActiveEnrollmentsSuspense: FC<ActiveEnrollmentsSuspenseProps> = ({
  activeEnrollmentsPromise,
}) => {
  return (
    <Suspense
      fallback={
        <CardSkeleton
          className="flow h-36 w-full flex-grow p-6 md:w-1/2-gap-8"
          qty
          title
        />
      }
    >
      <TypedAwait resolve={activeEnrollmentsPromise}>
        {(activeEnrollments) => {
          if (!activeEnrollments) return null;

          return (
            <ActiveEnrollmentsCard activeEnrollments={activeEnrollments} />
          );
        }}
      </TypedAwait>
    </Suspense>
  );
};

/**
 * Active Enrollments Card Component
 */

type ActiveEnrollmentsCardProps = CardProps & {
  activeEnrollments: UserDashboardActiveEnrollments;
};

const ActiveEnrollmentsCard: FC<ActiveEnrollmentsCardProps> = ({
  activeEnrollments,
}) => {
  const [enrollmentNavigation, setEnrollmentNavigation] = useState<string>();

  const { t } = useTranslation();
  const navigate = useNavigate();

  if (!activeEnrollments.length) return null;

  const goToEnrollment = (id: string) => {
    setEnrollmentNavigation(id);

    navigate(`/dashboard/enrollment/${id}`);
  };

  const {
    userDashboardData: { show_leaderboard },
  } = useUserDashboardContext();

  return (
    <Card className="flow h-fit w-full flex-grow overflow-hidden md:w-1/2-gap-8">
      <CardTitle
        qty={activeEnrollments.length}
        title={t("user.dashboard.active_enrollments")}
        className="p-6 pb-0"
      />

      {activeEnrollments.map((enrollment) => (
        <ProgressItem
          onClick={(id) => goToEnrollment(id)}
          key={enrollment.id}
          id={enrollment.id}
          title={enrollment.taxonomy?.display_name}
          ranking={show_leaderboard && enrollment.rank}
          score={enrollment.score}
          progress={{
            attempted: enrollment.attempted.aggregate?.count ?? 0,
            retired: enrollment.retired.aggregate?.count ?? 0,
            total: enrollment.total.aggregate?.count ?? 0,
          }}
          ariaLabel={t(
            "user.dashboard.active_enrollments.progress_bar.aria_label",
          )}
          loading={enrollmentNavigation === enrollment.id}
        />
      ))}
    </Card>
  );
};
