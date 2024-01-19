import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { faBellSchool } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ResponsiveContainer, useIsDesktop } from "quickcheck-shared";

import { useUserDashboardContext } from "~/pages/UserDashboard";

import { AccelerateButton } from "~/components";

/**
 * UserDashboard NoEnrollments Component
 */

export const UserDashboardNoEnrollments: FC = () => {
  const { t } = useTranslation();
  const { userDashboardData } = useUserDashboardContext();

  const isDesktop = useIsDesktop();

  return (
    <ResponsiveContainer className="flex-1 items-center p-4" asChild>
      <section className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-center sm:gap-12">
        <FontAwesomeIcon
          icon={faBellSchool}
          className="text-text-10 text-9xl"
        />

        <section className="flex flex-col gap-6 sm:gap-3">
          <h1 className="text-[1.75rem] font-semibold text-text-50 sm:text-3xl">
            {t("user.dashboard.no_enrollments.title")}
          </h1>

          <p className="text-text-75 sm:text-lg">
            {t("user.dashboard.no_enrollments.description")}
          </p>

          {!isDesktop && (
            <AccelerateButton
              background="light"
              tenantId={userDashboardData.tenant_id}
            />
          )}
        </section>
      </section>
    </ResponsiveContainer>
  );
};
