import { type FC } from "react"
import { useTranslation } from "react-i18next"

import { RichardsonLogo } from "quickcheck-shared"

import { useLandingContext } from "../LandingContext"

export const LandingHeader: FC = () => {
  const { t } = useTranslation()
  const { headerRef } = useLandingContext()

  return (
    <header ref={headerRef} className="sticky top-0 z-10 box-border flex items-center overflow-x-hidden bg-primary p-6">
      <RichardsonLogo className="mr-6 h-8 w-8" />
      <div className="text-3xxl font-semibold text-contrast">{t("common.quickcheck")}</div>
    </header>
  )
}
