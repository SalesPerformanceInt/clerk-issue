import { type FC } from "react";
import { useNavigate } from "@remix-run/react";

import { MobileMenu } from "quickcheck-shared";

import { useEnrollmentContext } from "~/pages/Enrollment";

export const EnrollmentMobileAction: FC = () => {
  const navigate = useNavigate();

  const { enrollment } = useEnrollmentContext();

  return (
    <MobileMenu
      unansweredQuestions={enrollment.unanswered_questions}
      onStart={() => navigate("/next-question")}
    />
  );
};
