import React, { type FC } from "react";

import type { FetchedUser } from "~/models/user";

import { DashboardHeader } from "./components/DashboardHeader";
import { DashboardMobileAction } from "./components/DashboardMobileAction";

interface DashboardProps {
  user: FetchedUser;
}

export const Dashboard: FC<DashboardProps> = ({ user }) => {
  return (
    <>
      <DashboardHeader user={user} />
      <DashboardMobileAction user={user} />
    </>
  );
};
