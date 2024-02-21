import React, { type FC } from "react";
import { useTranslation } from "react-i18next";

import { faUserHeadset } from "@fortawesome/pro-light-svg-icons";

import { Icon } from "./Icon";
import { Tooltip } from "./Tooltip";
import { LinkButton } from "./ui/Button";

export const Support: FC = () => {
  const { t } = useTranslation();

  return (
    <Tooltip
      ariaLabel="Contact Support"
      type="question"
      triggerClassName="text-xl text-background"
      contentClassName="bg-background p-0 z-20 shadow-card"
      closeButton={false}
      texts={[
        <LinkButton
          className="bg-background px-4 py-3 text-text"
          href="https://www.richardsonsupport.com/home/"
          target="_blank"
        >
          <Icon icon={faUserHeadset} className="mr-2" />
          {t("common.support")}
        </LinkButton>,
      ]}
    />
  );
};
