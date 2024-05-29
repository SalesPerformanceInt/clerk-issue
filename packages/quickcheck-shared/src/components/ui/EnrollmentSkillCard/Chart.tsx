import React, { type FC } from "react"
import { useTranslation } from "react-i18next"

import { identity, times } from "remeda"

import { PercentageBar } from "./PercentageBar"
import { EnrollmentSkillData } from "./types"

export const Chart: FC<EnrollmentSkillData> = ({ skill, baseline, current, unanswered }) => {
  const { t } = useTranslation()

  const chartData = [
    { type: t("common.baseline"), percent: baseline },
    { type: t("common.current"), percent: current },
  ]

  return (
    <div className="relative flex-1">
      <div className="absolute inset-0 flex justify-between">
        {times(5, identity).map((i) => (
          <div key={`${skill}-gridline-${i}`} className="flex h-full w-8 justify-center p-2">
            <div className="h-full border-l border-background-secondary" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0">
        <div className="flex h-full flex-col justify-center gap-4 px-4">
          {chartData.map(({ type, percent }) => (
            <PercentageBar
              key={`${skill}-${type}-${percent}`}
              percent={percent}
              empty={unanswered}
              ariaLabel={`${skill} ${type}`}
            />
          ))}
        </div>
      </div>

      {unanswered && (
        <div className="absolute inset-0">
          <div className="flex h-full items-center justify-center">
            <p className="text-xs font-semibold uppercase leading-4 text-text-50">{t("chart.not_enough_data")}</p>
          </div>
        </div>
      )}
    </div>
  )
}
