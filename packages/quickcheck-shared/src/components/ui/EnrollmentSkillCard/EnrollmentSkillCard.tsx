import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { Card, type CardProps } from "../Card";
import { Chart } from "./Chart";
import { EnrollmentSkillData } from "./types";

type EnrollmentSkillCardProps = CardProps & EnrollmentSkillData;

export const EnrollmentSkillCard: FC<EnrollmentSkillCardProps> = ({
  className,
  ...props
}) => {
  const { skill, baseline, current, unanswered, ...other } = props;
  const { t } = useTranslation();

  return (
    <Card key={skill} className={className} {...other}>
      <div className="flex w-full flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <p className="truncate text-base font-normal leading-6">{skill}</p>
        </div>
        {unanswered ? (
          <div className="-mx-4 flex h-37">
            <Chart {...props} />
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex h-33 justify-start gap-4">
              <div className="flex h-full w-16 flex-col justify-center gap-4 pr-2">
                {["baseline", "current"].map((label) => (
                  <div key={label} className="flex h-6 flex-col justify-center">
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
                  <div key={`percent-${p}`} className="flex w-8 justify-center">
                    <p className="text-xs font-semibold leading-4 text-text-50">{`${p}%`}</p>
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
