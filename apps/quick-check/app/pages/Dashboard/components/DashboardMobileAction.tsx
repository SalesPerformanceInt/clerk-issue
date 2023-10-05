import { type FC } from "react";

import { useNavigate } from "@remix-run/react";

import {
  MobileMenu,
  MobileMenuNavigation,
  MobileMenuUnansweredQuestions,
} from "quickcheck-shared";

import { useDashboardContext } from "~/pages/Dashboard";

export const DashboardMobileAction: FC = () => {
  const navigate = useNavigate();

  const { dashboard } = useDashboardContext();

  return (
    <MobileMenu>
      <MobileMenuUnansweredQuestions
        unansweredQuestions={dashboard.unanswered_questions}
        onStart={() => navigate("/next-question")}
      />
      <MobileMenuNavigation user={dashboard} />
    </MobileMenu>
  );
};
