import { useState, type FC } from "react";
import { useNavigate } from "@remix-run/react";

import {
  Header,
  HeaderReturn,
  HeaderUnansweredQuestions,
  Support,
  useIsDesktop,
} from "quickcheck-shared";

import { useEnrollmentContext } from "../context/EnrollmentContext";

export const EnrollmentHeader: FC = () => {
  const [start, setStart] = useState(false);

  const navigate = useNavigate();
  const { enrollment } = useEnrollmentContext();

  const isDesktop = useIsDesktop();

  const startQuestions = () => {
    setStart(true);

    navigate("/next-question");
  };

  return (
    <Header
      left={<HeaderReturn onClose={() => navigate("/")} />}
      right={
        isDesktop ? (
          <HeaderUnansweredQuestions
            userData={enrollment}
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
