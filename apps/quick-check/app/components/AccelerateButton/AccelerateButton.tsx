import React, { type FC } from "react";
import { useTranslation } from "react-i18next";

import { useNavigate } from "@remix-run/react";

import { faArrowUpRightFromSquare } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AccelerateIcon, Button } from "quickcheck-shared";

export const AccelerateButton: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Button
      onClick={() => navigate("/")}
      variant="secondary"
      className="uppercase text-xs px-4 w-auto"
    >
      <AccelerateIcon className="mr-2" dark />

      {t("buttons.accelerate")}

      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        className="ml-0.5 text-2xs mb-0.5"
      />
    </Button>
  );
};
