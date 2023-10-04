import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { NavLink, NavLinkProps, useNavigate } from "@remix-run/react";

import { faHome } from "@fortawesome/pro-light-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";
import { AccelerateIcon } from "~/images";

import { getUserInitials } from "~/utils/getUserInitials";
import { UserDataWithName } from "~/utils/types";

import { Avatar, Icon, IconProps } from "~/components";

type NavButtonProps = Omit<NavLinkProps, "className" | "children"> & {
  icon: IconProps["icon"];
  label: string;
};

const navButtonClassName =
  "flex flex-grow h-11 box-content p-2 pb-1 gap-1 flex-col justify-center items-center";
const navButtonLabelClassName = "text-xs uppercase font-semibold leading-4";

const NavButton: FC<NavButtonProps> = ({ icon, label, to }) => (
  <NavLink
    to={to}
    className={({ isActive, isPending }) =>
      twMerge(navButtonClassName, isActive && "bg-primary-25")
    }
  >
    <Icon icon={icon} className="text-2xl" />
    <p className={navButtonLabelClassName}>{label}</p>
  </NavLink>
);

const AccelerateNavButton = () => {
  const { t } = useTranslation();

  return (
    <a href="http://richardson.com" className={navButtonClassName}>
      <AccelerateIcon className="mr-2" />
      <div className="flex justify-center">
        <p className={navButtonLabelClassName}>{t("common.accelerate")}</p>
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="ml-0.5 text-2xs mb-0.5"
        />
      </div>
    </a>
  );
};

interface MobileMenuNavigationProps {
  user: UserDataWithName;
}

export const MobileMenuNavigation: FC<MobileMenuNavigationProps> = ({
  user,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex">
      <NavButton to="/dashboard" icon={faHome} label={t("common.dashboard")} />
      <AccelerateNavButton />
      <NavButton
        to="/profile"
        icon={<Avatar initials={getUserInitials(user)} />}
        label={t("common.profile")}
      />
    </div>
  );
};
