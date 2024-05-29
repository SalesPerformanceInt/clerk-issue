import type { FC } from "react"
import { useTranslation } from "react-i18next"

import { faEnvelopeCircleCheck } from "@fortawesome/pro-regular-svg-icons"

import { Icon } from "quickcheck-shared"

export const LandingEmailSubmitted: FC = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-4">
      <p className="mb-4 text-3xxl font-semibold">{t("landing.check_your_email")}</p>
      <div className="flex items-center gap-6">
        <Icon icon={faEnvelopeCircleCheck} className="!text-3xxl text-primary-50" />
        <p className="font-bold">{t("landing.email_sent")}</p>
      </div>
      <p>{t("landing.email_sent_expectation")}</p>
    </div>
  )
}
