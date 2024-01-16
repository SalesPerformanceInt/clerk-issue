import { type FC } from "react";
import { useNavigate } from "@remix-run/react";

import { MobileMenu } from "quickcheck-shared";

import { useUserDashboardContext } from "~/pages/UserDashboard";

export const DashboardMobileAction: FC = () => {
  const navigate = useNavigate();

  const { userDashboardData } = useUserDashboardContext();

  return (
    <MobileMenu
      unansweredQuestions={userDashboardData.unanswered_questions}
      onStart={() => navigate("/next-question")}
    />
  );
};
