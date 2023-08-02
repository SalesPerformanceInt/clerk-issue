import React, { type FC } from "react";

// import { faArrowUpRightDots } from "@fortawesome/pro-light-svg-icons";
import type { DashboardData } from "~/graphql";

import { ProgressIcon, ResponsiveContainer, Section } from "quickcheck-shared";

import { ActiveEnrollmentsCard } from "./components/ActiveEnrollmentsCard";
import { DashboardHeader } from "./components/DashboardHeader";
import { DashboardMobileAction } from "./components/DashboardMobileAction";

import { DashboardContextProvider } from "./context/DashboardContext";

interface DashboardProps {
  dashboard: DashboardData;
}

export const Dashboard: FC<DashboardProps> = ({ dashboard }) => {
  return (
    <DashboardContextProvider dashboard={dashboard}>
      <DashboardHeader />
      <ResponsiveContainer className="p-4">
        {/* <Section title="Activity" icon={faArrowUpRightDots} /></Section> */}
        <Section title="Progress" icon={<ProgressIcon />}>
          <ActiveEnrollmentsCard />
        </Section>
      </ResponsiveContainer>
      <DashboardMobileAction />
    </DashboardContextProvider>
  );
};
