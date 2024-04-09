import { useState, type FC } from "react";
import { useNavigate } from "@remix-run/react";

import {
  Header,
  HeaderReturn,
  HeaderUnansweredQuestions,
  Support,
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

  return (
    <Header
      left={
        <HeaderReturn
          label={enrollmentSkillDashboardData.enrollment_taxonomy?.display_name}
          onClose={() =>
            navigate(`/dashboard/enrollment/${enrollmentSkillDashboardData.id}`)
          }
        />
      }
      right={
        isDesktop ? (
          <HeaderUnansweredQuestions
            userData={enrollmentSkillDashboardData}
            onStart={() => startQuestions()}
            loading={start}
          />
        ) : (
          <Support />
        )
      }
    />
  );
};
