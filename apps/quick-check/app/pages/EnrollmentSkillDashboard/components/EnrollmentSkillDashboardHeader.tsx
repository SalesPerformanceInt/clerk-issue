import { useState, type FC } from "react";
import { useNavigate } from "@remix-run/react";

import {
  Header,
  HeaderReturnToDashboard,
  HeaderUnansweredQuestions,
  RichardsonLogo,
  useIsDesktop,
} from "quickcheck-shared";

import { useEnrollmentSkillDashboardContext } from "~/pages/EnrollmentSkillDashboard";

export const EnrollmentSkillDashboardHeader: FC = () => {
  const [start, setStart] = useState(false);

  const navigate = useNavigate();

  const { enrollmentSkillDashboardData } = useEnrollmentSkillDashboardContext();

  const isDesktop = useIsDesktop();

  const startQuestions = () => {
    setStart(true);

    navigate("/next-question");
  };

  if (isDesktop)
    return (
      <Header
        left={
          <HeaderReturnToDashboard
            name={
              enrollmentSkillDashboardData.enrollment_taxonomy?.display_name
            }
            onClose={() =>
              navigate(
                `/dashboard/enrollment/${enrollmentSkillDashboardData.id}`,
              )
            }
          />
        }
        right={
          isDesktop && (
            <HeaderUnansweredQuestions
              unansweredQuestions={
                enrollmentSkillDashboardData.unanswered_questions
              }
              onStart={() => startQuestions()}
              loading={start}
            />
          )
        }
      />
    );

  return <Header left={<RichardsonLogo />} />;
};
