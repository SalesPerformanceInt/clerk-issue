import { useTranslation } from "react-i18next";

import { Card, Section, useIsDesktop } from "quickcheck-shared";

import { useEnrollmentContext } from "~/pages/Enrollment";

import { EnrollmentLeaderboardCard } from "./EnrollmentLeaderboardCard";
import { EnrollmentProgress } from "./EnrollmentProgress";

const EnrollmentOverviewSectionDesktop = () => {
  const { t } = useTranslation();
  const { enrollment } = useEnrollmentContext();

  return (
    <section className="flex flex-col gap-10 mb-10 last:mb-0">
      <div className="flex justify-between gap-8 items-end w-full">
        <div>
          <div>
            <p className="uppercase font-semibold text-xs leading-4">{`${t(
              "common.dashboard",
            )} /`}</p>
            <h2 className="text-xxl font-semibold leading-8 text-text">
              {enrollment.taxonomy?.display_name}
            </h2>
          </div>
        </div>
        <div className="flex-1 max-w-sm">
          <EnrollmentProgress />
        </div>
      </div>
      <EnrollmentLeaderboardCard />
    </section>
  );
};

const EnrollmentOverviewSectionMobile = () => {
  const { t } = useTranslation();
  const { enrollment } = useEnrollmentContext();

  return (
    <>
      <h2 className="text-xxl font-semibold leading-8 text-text mb-4">
        {enrollment.taxonomy?.display_name}
      </h2>
      <Section title={t("common.overview")}>
        <EnrollmentProgress />
        <EnrollmentLeaderboardCard />
      </Section>
    </>
  );
};

export const EnrollmentOverviewSection = () => {
  const isDesktop = useIsDesktop();

  if (isDesktop) return <EnrollmentOverviewSectionDesktop />;

  return <EnrollmentOverviewSectionMobile />;
};
