import React, { type FC } from "react";

import { useNavigate } from "@remix-run/react";

import { faArrowUpRightFromSquare } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AccelerateIcon, Button } from "quickcheck-shared";

export const AccelerateButton: FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/")}
      variant="secondary"
      className="uppercase text-xs px-4"
    >
      <AccelerateIcon className="mr-2" dark />
      Accelerate
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        //   size="xs"
        className="ml-0.5 text-xxs"
      />
    </Button>
  );
};
