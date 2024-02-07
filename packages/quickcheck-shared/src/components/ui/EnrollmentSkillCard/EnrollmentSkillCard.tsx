import React, { type FC } from "react";
import { useTranslation } from "react-i18next";

import { faChevronRight } from "@fortawesome/pro-regular-svg-icons";
import { faSpinner } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "~qcs/utils";

import { Card, type CardProps } from "../Card";
import { Chart } from "./Chart";
import type { EnrollmentSkillData } from "./types";

type EnrollmentSkillCardProps = Omit<CardProps, "onClick"> &
  EnrollmentSkillData & {
    categories: ("baseline" | "current" | "final")[];
    loading?: boolean;
    onClick?: (id: string) => void;
  };

export const EnrollmentSkillCard: FC<EnrollmentSkillCardProps> = ({
  categories,
  className,
  loading,
  onClick,
  children,
  ...props
}) => {
  const { skill, baseline, current, unanswered, id, ...other } = props;
  const { t } = useTranslation();

  return (
    <Card
      key={skill}
      className={className}
      onClick={() => onClick?.(id)}
      {...other}
    >
      <div
        className={cn(
          "flex w-full items-center justify-between gap-6 p-4",
          !!onClick && "cursor-pointer hover:backdrop-brightness-95",
        )}
      >
        <div className="flex w-full flex-col justify-center gap-2">
          {children ?? (
            <div className="flex items-center gap-2">
              <p className="truncate text-base font-normal leading-6">
                {skill}
              </p>
            </div>
          )}

          {unanswered ? (
            <div className="-mx-4 flex h-37">
              <Chart {...props} />
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="flex h-33 justify-start gap-4">
                <div className="flex h-full w-16 flex-col justify-center gap-4 pr-2">
                  {categories.map((label) => (
                    <div
                      key={label}
                      className="flex h-6 flex-col justify-center"
                    >
                      <p className="text-xs font-semibold uppercase text-text-50">
                        {t(`common.${label}`)}
                      </p>
                    </div>
                  ))}
                </div>
                <Chart {...props} />
              </div>

              <div className="flex justify-start  gap-4">
                <div className="w-16 "></div>
                <div className="flex flex-1 justify-between">
                  {[0, 25, 50, 75, 100].map((p) => (
                    <div
                      key={`percent-${p}`}
                      className="flex w-8 justify-center"
                    >
                      <p className="text-xs font-semibold leading-4 text-text-50">{`${p}%`}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
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
    </Card>
  );
};
