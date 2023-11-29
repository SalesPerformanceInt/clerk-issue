import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { faArrowUpRightFromSquare } from "@fortawesome/pro-light-svg-icons";

import { Icon, LinkButton, LinkButtonProps } from "quickcheck-shared";

interface AccelerateButtonProps extends Omit<LinkButtonProps, "children"> {
  tenantId: string;
}

export const AccelerateButton: FC<AccelerateButtonProps> = ({
  tenantId,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <LinkButton
      href={`https://${tenantId}.richardsonaccelerate.com/`}
      target="_blank"
      variant="secondary"
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
