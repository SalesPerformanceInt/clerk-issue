import { type FC } from "react";
import { useTranslation } from "react-i18next";

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

import { useDashboardContext } from "~/pages/Dashboard";

export const DashboardHeader: FC = () => {
  const navigate = useNavigate();

  const isDesktop = useIsDesktop();

  const { dashboard } = useDashboardContext();

  const { t } = useTranslation();

  return (
    <Header
      left={<RichardsonLogo className="mr-6" />}
      right={
        <div className="flex items-center gap-4 sm:gap-8">
          {isDesktop && (
            <div className="flex items-center gap-4">
              <p className="text-xs text-background uppercase whitespace-pre">
                {t("common.unanswered", {
                  count: dashboard.unanswered_questions,
                })}
              </p>

              {!!dashboard.unanswered_questions && (
                <Button
                  onClick={() => navigate("/nq")}
                  rightIcon={faArrowRight}
                >
                  {t("buttons.start")}
                </Button>
              )}
            </div>
          )}

          <Avatar initials={getUserIntials(dashboard)} />
        </div>
      }
    />
  );
};
