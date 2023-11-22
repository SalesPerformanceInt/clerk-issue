import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "@remix-run/react";

import {
  Header,
  HeaderUnansweredQuestions,
  RichardsonLogo,
  useIsDesktop,
} from "quickcheck-shared";

import { useDashboardContext } from "~/pages/Dashboard";

import { AccelerateButton } from "~/components";

export const DashboardHeader: FC = () => {
  const navigate = useNavigate();

  const { dashboard } = useDashboardContext();

  const isDesktop = useIsDesktop();

  if (isDesktop)
    return (
      <Header
        left={
          <HeaderUnansweredQuestions
            before={<RichardsonLogo />}
            unansweredQuestions={dashboard.unanswered_questions}
            onStart={() => navigate("/next-question")}
          />
        }
        right={<AccelerateButton tenantId={dashboard.tenant_id} />}
      />
    );

  return <Header left={<RichardsonLogo />} />;
};
