import React, { type FC } from "react";
import { useTranslation } from "react-i18next";

import { faAward, faRankingStar } from "@fortawesome/pro-light-svg-icons";
import { faChevronRight } from "@fortawesome/pro-regular-svg-icons";
import { faSpinner } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Progress, ProgressIndicator } from "@radix-ui/react-progress";
import { twMerge } from "tailwind-merge";

type ProgressItemProps = {
  id: string;
  title?: string;
  ranking?: string | number | null;
  score?: string | number | null;
  progress: {
    attempted: number;
    retired: number;
    total: number;
  };
  ariaLabel: string;
  loading?: boolean;
  onClick?: (id: string) => void;
};

const ProgressItem: FC<ProgressItemProps> = ({
  id,
  title,
  ranking,
  score,
  progress,
  onClick,
  ariaLabel,
  loading,
}) => {
  const { t } = useTranslation();

  const progressBarValues = {
    retired: (progress.retired / progress.total) * 100,
    attempted: (progress.attempted / progress.total) * 100,
  };

  return (
    <div
      className={twMerge(
        "flex w-full items-center justify-between gap-6 border-b border-b-background-secondary p-4 last:border-b-0",
        !!onClick && "cursor-pointer hover:backdrop-brightness-95",
      )}
      onClick={() => onClick?.(id)}
    >
      <div
        className={twMerge(
          "flex w-full flex-col gap-2 overflow-hidden",
          !title && "gap-4",
        )}
      >
        {title && (
          <div className="flex items-center justify-between font-normal text-text">
            <h3 className="flex-[2] truncate">{title}</h3>
            <div className="flex flex-1 items-center justify-end gap-4">
              {!!ranking && (
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faRankingStar} size="xs" />

                  <span> {`#${ranking}`} </span>
                </div>
              )}
              {!!score && (
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faAward} size="xs" />
                  <span> {score} </span>
                </div>
              )}
            </div>
          </div>
        )}
        <Progress
          className="relative h-2 w-full overflow-hidden rounded-full bg-primary-25"
          aria-label={`${ariaLabel} ${t("common.progress_bar.aria_label")}`}
        >
          <ProgressIndicator
            className="absolute h-full w-full bg-primary"
            style={{
              transform: `translateX(-${100 - progressBarValues.attempted}%)`,
            }}
          />
          <ProgressIndicator
            className="absolute h-full w-full bg-success"
            style={{
              transform: `translateX(-${100 - progressBarValues.retired}%)`,
            }}
          />
        </Progress>
        <div className="flex items-center justify-between text-xs font-semibold uppercase text-text">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-success" />
              <span>
                {t("user.dashboard.retired", { count: progress.retired })}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>
                {t("user.dashboard.attempted", { count: progress.attempted })}
              </span>
            </div>
          </div>
          <span>{t("user.dashboard.total", { count: progress.total })}</span>
        </div>
      </div>

      {!!onClick && loading && (
        <div>
          <FontAwesomeIcon
            icon={faSpinner}
            size="lg"
            className="text-text-75"
            spinPulse
          />
        </div>
      )}

      {!!onClick && !loading && (
        <div>
          <FontAwesomeIcon
            icon={faChevronRight}
            size="xl"
            className="text-text-75"
          />
        </div>
      )}
    </div>
  );
};

export { ProgressItem, type ProgressItemProps };
