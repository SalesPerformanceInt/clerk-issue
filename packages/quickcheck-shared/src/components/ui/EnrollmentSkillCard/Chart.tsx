import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { faInfoCircle } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { identity, times } from "remeda";

import { Card } from "../Card";
import { PercentageBar } from "./PercentageBar";
import { EnrollmentSkillData } from "./types";

export const Chart: FC<EnrollmentSkillData> = ({
  skill,
  baseline,
  current,
  unanswered,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex-1 relative">
      <div className="absolute inset-0 flex justify-between">
        {times(5, identity).map((i) => (
          <div
            key={`${skill}-gridline-${i}`}
            className="h-full w-8 p-2 flex justify-center"
          >
            <div className="h-full border-l border-background-secondary" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0">
        <div className="flex h-full flex-col gap-4 justify-center px-4">
          {[baseline, current].map((percent, i) => (
            <PercentageBar key={i} percent={percent} empty={unanswered} />
          ))}
        </div>
      </div>

      {unanswered && (
        <div className="absolute inset-0">
          <div className="flex h-full justify-center items-center">
            <p className="text-xs leading-4 font-semibold uppercase text-text-50">
              {t("chart.not_enough_data")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
