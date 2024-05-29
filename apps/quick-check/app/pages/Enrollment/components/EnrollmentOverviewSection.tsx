import { useTranslation } from "react-i18next"

import { Section, useIsDesktop } from "quickcheck-shared"

import { useEnrollmentContext } from "~/pages/Enrollment"

import { EnrollmentLeaderboardCard } from "./EnrollmentLeaderboardCard"
import { EnrollmentProgress } from "./EnrollmentProgress"

const EnrollmentOverviewSectionDesktop = () => {
  const { t } = useTranslation()
  const { enrollment } = useEnrollmentContext()

  return (
    <section className="mb-10 flex flex-col gap-10 last:mb-0">
      <div className="flex w-full items-end justify-between gap-8">
        <div>
          <div>
            <p className="text-xs font-semibold uppercase leading-4">{`${t("common.dashboard")} /`}</p>
            <h2 className="text-xxl font-semibold leading-8 text-text">{enrollment.taxonomy?.display_name}</h2>
          </div>
        </div>
        <div className="max-w-sm flex-1">
          <EnrollmentProgress />
        </div>
      </div>
      {enrollment.user.show_leaderboard && <EnrollmentLeaderboardCard />}
    </section>
  )
}

const EnrollmentOverviewSectionMobile = () => {
  const { t } = useTranslation()
  const { enrollment } = useEnrollmentContext()

  return (
    <>
      <h2 className="mb-4 text-xxl font-semibold leading-8 text-text">{enrollment.taxonomy?.display_name}</h2>
      <Section title={t("common.overview")}>
        <EnrollmentProgress />
        <EnrollmentLeaderboardCard />
      </Section>
    </>
  )
}

export const EnrollmentOverviewSection = () => {
  const isDesktop = useIsDesktop()

  if (isDesktop) return <EnrollmentOverviewSectionDesktop />

  return <EnrollmentOverviewSectionMobile />
}
