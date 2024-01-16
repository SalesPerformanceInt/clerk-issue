import { useState, type FC } from "react";
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
  const [start, setStart] = useState(false);

  const navigate = useNavigate();

  const { userDashboardData } = useUserDashboardContext();

  const isDesktop = useIsDesktop();

  const startQuestions = () => {
    setStart(true);

    navigate("/next-question");
  };

  if (isDesktop)
    return (
      <Header
        right={
          <HeaderUnansweredQuestions
            unansweredQuestions={userDashboardData.unanswered_questions}
            onStart={() => startQuestions()}
            loading={start}
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
