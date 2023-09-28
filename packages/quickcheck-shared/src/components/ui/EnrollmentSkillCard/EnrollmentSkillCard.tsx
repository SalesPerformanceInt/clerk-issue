import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { faInfoCircle } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { identity, times } from "remeda";

import { Card } from "../Card";
import { Chart } from "./Chart";
import { PercentageBar } from "./PercentageBar";
import { EnrollmentSkillData } from "./types";

export const EnrollmentSkillCard: FC<EnrollmentSkillData> = (props) => {
  const { skill, baseline, current, unanswered, ...other } = props;
  const { t } = useTranslation();

  return (
    <Card key={skill} {...other}>
      <div className="w-full p-4 flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <p className="text-base leading-6 font-normal ">{skill}</p>
          <FontAwesomeIcon icon={faInfoCircle} className="text-xs text-text" />
        </div>
        {unanswered ? (
          <div className="flex h-37 -mx-4">
            <Chart {...props} />
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex gap-4 h-33 justify-start">
              <div className="flex h-full flex-col gap-4 justify-center w-16 pr-2">
                {["baseline", "current"].map((label) => (
                  <div key={label} className="h-6 flex flex-col justify-center">
                    <p className="text-xs uppercase font-semibold text-text-50">
                      {t(`common.${label}`)}
                    </p>
                  </div>
                ))}
              </div>
              <Chart {...props} />
            </div>
            <div className="flex gap-4  justify-start">
              <div className="w-16 "></div>
              <div className="flex-1 flex justify-between">
                {[0, 25, 50, 75, 100].map((p) => (
                  <div key={`percent-${p}`} className="w-8 flex justify-center">
                    <p className="text-text-50 font-semibold text-xs leading-4">{`${p}%`}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
