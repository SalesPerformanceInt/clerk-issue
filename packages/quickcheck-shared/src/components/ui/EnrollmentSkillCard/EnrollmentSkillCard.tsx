import React, { type FC } from "react"
import { useTranslation } from "react-i18next"

import { faArrowRight } from "@fortawesome/pro-light-svg-icons"

import { Button } from "~qcs/components"
import { Card, CardSkeleton, type CardProps } from "~qcs/components/ui/Card"
import { Skeleton } from "~qcs/components/ui/Skeleton"

import { Chart } from "./Chart"
import type { EnrollmentSkillData } from "./types"

/**
 * EnrollmentSkill Card Component
 */

type EnrollmentSkillCardProps = Omit<CardProps, "onClick"> &
  EnrollmentSkillData & {
    categories: ("baseline" | "current" | "final")[]
    loading?: boolean
    onClick?: (id: string) => void
  }

export const EnrollmentSkillCard: FC<EnrollmentSkillCardProps> = ({
  categories,
  className,
  loading,
  onClick,
  children,
  ...props
}) => {
  const { skill, baseline, current, unanswered, id, completed, ...other } = props
  const { t } = useTranslation()

  return (
    <Card key={skill} className={className} {...other}>
      <div className="flex flex-col gap-6 p-4">
        <div className="flex w-full items-center justify-between gap-6">
          <div className="flex w-full flex-col justify-center gap-2">
            {children ?? (
              <div className="flex items-center gap-2">
                <p className="truncate text-base font-normal leading-6">{skill}</p>
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
                      <div key={label} className="flex h-6 flex-col justify-center">
                        <p className="text-xs font-semibold uppercase text-text-50">{t(`common.${label}`)}</p>
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
        </div>
        {completed && onClick && (
          <div className="flex justify-end">
            <Button
              rightIcon={faArrowRight}
              onClick={() => onClick?.(id)}
              background="light"
              variant="secondary"
              loading={loading}
            >
              {t("buttons.review")}
            </Button>
          </div>
        )}
      </div>
    </Card>
  )
}

/**
 * EnrollmentSkill Card Skeleton
 */

export const EnrollmentSkillCardSkeleton: FC = () => {
  return (
    <CardSkeleton className="h-64 w-full flex-grow p-4 md:w-1/2-gap-8" title>
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-4 pt-10">
          <div className="flex gap-6">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-56" />
          </div>

          <div className="flex gap-6">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-56" />
          </div>
        </div>

        <Skeleton className="h-11 w-full md:ml-auto md:w-32" />
      </div>
    </CardSkeleton>
  )
}
