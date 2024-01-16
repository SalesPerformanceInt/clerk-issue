import { type FC } from "react";
import { useNavigate } from "@remix-run/react";

import {
  Header,
  HeaderUnansweredQuestions,
  RichardsonLogo,
  useIsDesktop,
} from "quickcheck-shared";

import { useUserDashboardContext } from "~/pages/UserDashboard";

import { AccelerateButton } from "~/components";

export const DashboardHeader: FC = () => {
  const navigate = useNavigate();

  const { userDashboardData } = useUserDashboardContext();

  const isDesktop = useIsDesktop();

  if (isDesktop)
    return (
      <Header
        right={
          <HeaderUnansweredQuestions
            unansweredQuestions={userDashboardData.unanswered_questions}
            onStart={() => navigate("/next-question")}
          />
        }
        left={
          <div className="flex items-center">
            <RichardsonLogo />
            <AccelerateButton tenantId={userDashboardData.tenant_id} />
          </div>
        }
      />
    );

  return <Header left={<RichardsonLogo />} />;
};
