import type { FC } from "react"
import { useTranslation } from "react-i18next"

import QCHoldingPhone from "~/images/qc_holding_phone.png"
import RichardsonWatermark from "~/images/richardson_watermark.png"

import { LandingActionSection, landingActionValidator, LandingBody, LandingFooter, LandingHeader } from "./components"

import { LandingContextProvider } from "./LandingContext"

export { landingActionValidator }

export const Landing: FC = () => {
  const { t } = useTranslation()

  return (
    <LandingContextProvider>
      <LandingHeader />
      <LandingBody>
        <LandingActionSection />
        <div className="relative flex flex-1 items-end justify-center lg:h-full">
          <img
            src={RichardsonWatermark}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
          />
          <img src={QCHoldingPhone} className="z-10" />
        </div>
      </LandingBody>
      <LandingFooter />
    </LandingContextProvider>
  )
}
