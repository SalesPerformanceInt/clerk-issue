import { Suspense, type FC } from "react";

import { Await } from "@remix-run/react";

import { twMerge } from "tailwind-merge";

import {
  Card,
  CardTitle,
  LeaderboardEntry,
  type LeaderboardEntryProps,
} from "quickcheck-shared";

import { User_Enrollment } from "~/graphql";

import { useDashboardContext } from "~/pages/Dashboard";

type LeaderboardCardProps = {
  entries?: LeaderboardEntryProps[];
  className?: string;
};

type RankedEnrollment = Pick<
  User_Enrollment,
  "id" | "user_id" | "rank" | "score" | "taxonomy_id"
> & { displayName: string };

const CachedLeaderboard: FC = () => {
  const { dashboard } = useDashboardContext();

  return (
    <>
      {dashboard.user_enrollments.slice(0, 4).map((enrollment) => (
        <LeaderboardEntry
          key={enrollment.id}
          rank={enrollment.rank || 0}
          title={enrollment.taxonomy?.display_name || ""}
        />
      ))}
    </>
  );
};

export const LeaderboardCard: FC<LeaderboardCardProps> = ({ className }) => {
  const { enrollmentsRanking, dashboard } = useDashboardContext();

  const RANK = 1;
  const currentUserRankedEnrollments = new Map<string, RankedEnrollment>();

  return (
    <Card className={twMerge("max-w-sm", className)}>
      <CardTitle title="Leaderboard" className="p-6 pb-0" />

      <section className="flex flex-col gap-4 p-6">
        <Suspense fallback={<CachedLeaderboard />}>
          {/* <Await resolve={enrollmentsRanking}>
            {(data) => {
              console.log(data.enrollmentsScores);

              return Object.entries(data.enrollmentsScores)
                .map(([key, value]) => {
                  const rankedEnrollments = value
                    .slice()
                    .sort((a, b) => b.score - a.score)
                    .reduce((acc, inc) => {
                      const lastRankGroup = acc.at(-1);

                      if (!acc.length) return [[{ ...inc, rank: 1 }]];

                      if (!lastRankGroup || !lastRankGroup[0]) return acc;

                      return lastRankGroup[0].score > inc.score
                        ? [...acc, [{ ...inc, rank: lastRankGroup.length + 1 }]]
                        : [
                            ...acc.slice(0, -1),
                            lastRankGroup.concat({
                              ...inc,
                              rank: lastRankGroup[0].rank,
                            }),
                          ];
                    }, [] as RankedEnrollments[][])
                    .flat();

                  const currentEnrollment = dashboard.user_enrollments.find(
                    (enrollment) => enrollment.taxonomy_id === key,
                  );

                  const currentRank = rankedEnrollments.find(
                    (rankedEnrollment) =>
                      rankedEnrollment.id === currentEnrollment?.id,
                  )?.rank;

                  return {
                    title: currentEnrollment?.taxonomy?.display_name || "",
                    rank: currentRank || 1,
                  };
                })
                .sort((a, b) => b.rank - a.rank)
                .slice(0, 4)
                .map((rankedEnrollment) => (
                  <LeaderboardEntry
                    key={rankedEnrollment.title}
                    rank={rankedEnrollment.rank}
                    title={rankedEnrollment.title}
                  />
                ));
            }}
          </Await> */}

          <Await resolve={enrollmentsRanking}>
            {({ taxonomyEnrollments }) => {
              return taxonomyEnrollments
                .map(({ taxonomy, enrollments }) => {
                  let rank = RANK;

                  const rankedEnrollments = enrollments.map(
                    (enrollment, enrollmentIndex) => {
                      const previousEnrollment =
                        enrollments[enrollmentIndex - 1];

                      rank =
                        enrollment.score === previousEnrollment?.score
                          ? rank
                          : enrollmentIndex + 1;

                      const rankedEnrollment: RankedEnrollment = {
                        id: enrollment.id,
                        user_id: enrollment.user_id,
                        score: enrollment.score,
                        taxonomy_id: enrollment.taxonomy_id,
                        displayName: taxonomy.display_name,
                        rank,
                      };

                      if (rankedEnrollment.user_id === dashboard.user_id) {
                        currentUserRankedEnrollments.set(
                          taxonomy.uid,
                          rankedEnrollment,
                        );
                      }

                      return rankedEnrollment;
                    },
                  );

                  return (
                    currentUserRankedEnrollments.get(taxonomy.uid) ||
                    rankedEnrollments[0]
                  );
                })
                .sort((a, b) => a?.rank! - b?.rank!)
                .slice(0, 4)
                .map(
                  (rankedEnrollment) =>
                    rankedEnrollment && (
                      <LeaderboardEntry
                        key={rankedEnrollment.displayName}
                        rank={rankedEnrollment.rank || 0}
                        title={rankedEnrollment.displayName}
                      />
                    ),
                );
            }}
          </Await>
        </Suspense>
      </section>
    </Card>
  );
};

// return (
//   <LeaderboardEntry
//     key={key}
//     rank={currentRank || 1}
//     title={currentEnrollment?.taxonomy?.display_name || ""}
//   />
// );
