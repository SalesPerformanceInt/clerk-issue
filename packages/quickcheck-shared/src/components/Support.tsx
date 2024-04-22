import React, { type FC } from "react";
import { useTranslation } from "react-i18next";

import { faUserHeadset } from "@fortawesome/pro-light-svg-icons";
import { twMerge } from "tailwind-merge";

import { useIsDesktop } from "..";
import { Icon } from "./Icon";
import { Tooltip } from "./Tooltip";
import { LinkButton } from "./ui/Button";

export const SUPPORT_URL = "https://www.richardsonsupport.com/home/";

export const Support: FC = () => {
  const { t } = useTranslation();
  const isDesktop = useIsDesktop();

  return (
    <Tooltip
      ariaLabel="Contact Support"
      type="question"
      triggerClassName="text-xl text-background"
      contentClassName={twMerge(
        "bg-background p-0 z-20 shadow-card",
        isDesktop ? "mr-6" : "mr-4",
      )}
      closeButton={false}
      texts={[
        <LinkButton
          className="bg-background px-4 py-3 text-text"
          href={SUPPORT_URL}
          target="_blank"
        >
          <Icon icon={faUserHeadset} className="mr-2" />
          {t("common.support")}
        </LinkButton>,
      ]}
    />
  );
};
