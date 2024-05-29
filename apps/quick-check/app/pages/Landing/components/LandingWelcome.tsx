import type { FC } from "react"
import { useTranslation } from "react-i18next"

export const LandingWelcome: FC = () => {
  const { t } = useTranslation()

  const welcomeText = t("landing.welcome")
  const quickCheck = t("common.quickcheck")

  const split = welcomeText.split(new RegExp(`(${quickCheck})`))

  const formatted = split.map((el) =>
    el === quickCheck ? (
      <span key={el} className="text-primary">
        {quickCheck}
      </span>
    ) : (
      el
    ),
  )

  return <p className="text-5xl font-semibold text-text-25 lg:text-huge">{formatted}</p>
}
