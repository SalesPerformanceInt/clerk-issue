import { type FC } from "react";

import { useNavigate } from "@remix-run/react";

import {
  MobileMenu,
  MobileMenuNavigation,
  MobileMenuUnansweredQuestions,
} from "quickcheck-shared";

import { useEnrollmentContext } from "~/pages/Enrollment";

export const EnrollmentMobileAction: FC = () => {
  const navigate = useNavigate();

  const { enrollment } = useEnrollmentContext();

  return (
    <MobileMenu>
      <MobileMenuUnansweredQuestions
        unansweredQuestions={enrollment.unanswered_questions}
        onStart={() => navigate("/next-question")}
      />
      <MobileMenuNavigation user={enrollment.user} />
    </MobileMenu>
  );
};
