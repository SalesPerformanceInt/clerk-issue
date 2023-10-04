import { type FC } from "react";

import { useNavigate } from "@remix-run/react";

import { Header, ReturnToDashboard } from "quickcheck-shared";

export const EnrollmentHeader: FC = () => {
  const navigate = useNavigate();

  return <Header left={<ReturnToDashboard onClose={() => navigate("/")} />} />;
};
