import { type FC } from "react";

import { useNavigate } from "@remix-run/react";

import { faArrowRight } from "@fortawesome/pro-light-svg-icons";
import { useDashboardContext } from "~/pages/Dashboard";

import {
  Avatar,
  Button,
  Header,
  RichardsonLogo,
  useIsDesktop,
} from "quickcheck-shared";

import { getUserIntials } from "~/utils/getUserInitials";

import { AccelerateButton } from "~/components";

export const DashboardHeader: FC = () => {
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();
  const { user } = useDashboardContext();

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
