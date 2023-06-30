import React, { type FC } from "react";

import { useNavigate } from "@remix-run/react";

import { Button } from "accelerate-learner-ui";

export const AccelerateButton: FC = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate("/")}>Login to Accelerate</Button>;
};
