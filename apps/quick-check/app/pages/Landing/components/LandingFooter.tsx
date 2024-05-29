import { type FC } from "react"
import { useTranslation } from "react-i18next"

import RichardsonLogomark from "~/images/richardson_logomark.svg"
import { twMerge } from "tailwind-merge"

import { useLandingContext } from "../LandingContext"

export const LandingFooter: FC = () => {
  const { t } = useTranslation()
  const { footerRef } = useLandingContext()

  return (
    <footer
      ref={footerRef}
      className={twMerge(
        "flex w-full flex-col items-center gap-2 overflow-x-hidden border-t border-primary-25 bg-background-secondary p-6",
        "lg:fixed lg:bottom-0 lg:z-10 lg:flex-row lg:justify-between",
      )}
    >
      <img src={RichardsonLogomark} className="h-6" />
      <div className="">{t("common.copyright")}</div>
    </footer>
  )
}
