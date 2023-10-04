import { type FC } from "react";

import { useNavigate } from "@remix-run/react";

import {
  Header,
  HeaderReturnToDashboard,
  HeaderUnansweredQuestions,
} from "quickcheck-shared";

import { useEnrollmentContext } from "../context/EnrollmentContext";

export const EnrollmentHeader: FC = () => {
  const navigate = useNavigate();
  const { enrollment } = useEnrollmentContext();
  return (
    <Header
      left={<HeaderReturnToDashboard onClose={() => navigate("/")} />}
      right={
        <HeaderUnansweredQuestions
          unansweredQuestions={enrollment.unanswered_questions}
          user={enrollment.user}
          onStart={() => navigate("/next-question")}
          show
        />
      }
    />
  );
};
