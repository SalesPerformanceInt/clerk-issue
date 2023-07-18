import React, { type FC } from "react";

import { faArrowUpRightDots } from "@fortawesome/pro-light-svg-icons";

import {
  Card,
  ProgressIcon,
  ResponsiveContainer,
  Section,
} from "quickcheck-shared";

import type { FetchedUser } from "~/models/user";

import { DashboardHeader } from "./components/DashboardHeader";
import { DashboardMobileAction } from "./components/DashboardMobileAction";

import { DashboardContextProvider } from "./context/DashboardContext";

interface DashboardProps {
  user: FetchedUser;
}

export const Dashboard: FC<DashboardProps> = ({ user }) => {
  return (
    <DashboardContextProvider user={user}>
      <DashboardHeader />
      <ResponsiveContainer className="p-4">
        <Section title="Activity" icon={faArrowUpRightDots}>
          <Card className="h-32 last:col-span-full">Content</Card>
          <Card className="h-52 last:col-span-full">Content</Card>
          <Card className="h-40 last:col-span-full">Content</Card>
        </Section>
        <Section title="Progress" icon={<ProgressIcon />}>
          <Card className="h-32 last:col-span-full">Content</Card>
          <Card className="h-52 last:col-span-full">Content</Card>
          <Card className="h-40 last:col-span-full">Content</Card>
        </Section>
      </ResponsiveContainer>
      <DashboardMobileAction />
    </DashboardContextProvider>
  );
};
