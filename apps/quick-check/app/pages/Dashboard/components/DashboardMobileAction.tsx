import React, { type FC } from "react";
import { useMeasure } from "react-use";

import { useNavigate } from "@remix-run/react";

import { faArrowRight } from "@fortawesome/pro-light-svg-icons";

import { Button, ResponsiveContainer, useIsDesktop } from "quickcheck-shared";

import type { FetchedUser } from "~/models/user";

interface DashboardMobileActionProps {
  user: FetchedUser;
}

export const DashboardMobileAction: FC<DashboardMobileActionProps> = ({
  user,
}) => {
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  if (isDesktop) return null;

  return (
    <>
      <div style={{ height }} />
      <ResponsiveContainer
        ref={ref}
        className="fixed bottom-0 bg-primary inset-x-0  text-background box-border"
      >
        <div className="p-4 pt-2 flex flex-col gap-2 items-center">
          <p className="text-xs text-background-75 uppercase">
            24 Unanswered questions
          </p>
          <Button onClick={() => navigate("/nq")} rightIcon={faArrowRight}>
            Start
          </Button>
        </div>
      </ResponsiveContainer>
    </>
  );
};
