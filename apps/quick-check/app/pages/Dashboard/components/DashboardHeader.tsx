import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { useNavigate } from "@remix-run/react";

import {
  Header,
  HeaderUnansweredQuestions,
  RichardsonLogo,
} from "quickcheck-shared";

import { useDashboardContext } from "~/pages/Dashboard";

export const DashboardHeader: FC = () => {
  const navigate = useNavigate();

  const { dashboard } = useDashboardContext();

  const { t } = useTranslation();

  return (
    <Header
      left={<RichardsonLogo />}
      right={
        <HeaderUnansweredQuestions
          unansweredQuestions={dashboard.unanswered_questions}
          user={dashboard}
          onStart={() => navigate("/next-question")}
        />
      }
    />
  );
};
