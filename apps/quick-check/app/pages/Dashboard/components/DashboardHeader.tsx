import { type FC } from "react";

import { useNavigate } from "@remix-run/react";

import { faArrowRight } from "@fortawesome/pro-light-svg-icons";

import {
  Avatar,
  Button,
  Header,
  RichardsonLogo,
  useIsDesktop,
} from "quickcheck-shared";

import { getUserIntials } from "~/utils/getUserInitials";

import type { FetchedUser } from "~/models/user";

import { AccelerateButton } from "~/components";

interface DashboardHeaderProps {
  user: FetchedUser;
}

export const DashboardHeader: FC<DashboardHeaderProps> = ({ user }) => {
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();

  return (
    <Header
      left={<RichardsonLogo className="mr-6" />}
      right={
        <div className="flex items-center gap-4 sm:gap-8">
          {isDesktop && (
            <div className="flex items-center gap-4">
              <p className="text-xs text-background uppercase">
                24 Unanswered questions
              </p>
              <Button onClick={() => navigate("/nq")} rightIcon={faArrowRight}>
                Start
              </Button>
            </div>
          )}
          <AccelerateButton />
          <Avatar initials={getUserIntials(user)} />
        </div>
      }
    />
  );
};
