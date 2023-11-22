import React, { type FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "@remix-run/react";

import { faArrowUpRightFromSquare } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  AccelerateIcon,
  Icon,
  LinkButton,
  LinkButtonProps,
  useIsDesktop,
} from "quickcheck-shared";

interface AccelerateButtonProps extends Omit<LinkButtonProps, "children"> {
  tenantId: string;
}

export const AccelerateButton: FC<AccelerateButtonProps> = ({
  tenantId,
  ...props
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isDesktop = useIsDesktop();

  return (
    <LinkButton
      href={`https://${tenantId}.richardsonaccelerate.com/`}
      target="_blank"
      variant="secondary"
      // rightIcon={isDesktop ? faArrowUpRightFromSquare : undefined}
      rightIconClassName="text-xs"
      {...props}
    >
      {t("buttons.go_to_accelerate")}
      <Icon
        icon={faArrowUpRightFromSquare}
        className="ml-4 text-center text-xs font-light leading-6"
      />
    </LinkButton>
  );
};
