import { type FC } from "react"
import { useTranslation } from "react-i18next"

import { useControlField } from "remix-validated-form"

import { FormInput } from "../FormInput"

const MAX_LENGTH = 500

export const SurveyComment: FC = () => {
  const { t } = useTranslation()
  const [comment = "", setValue] = useControlField<string>("comment")

  return (
    <div>
      <FormInput
        maxLength={MAX_LENGTH}
        name="comment"
        placeholder={t("survey.comment.placeholder")}
        value={comment}
        onChange={(e) => setValue(e.target.value)}
      />
      <p className="text-right text-xs text-primary-50">{`${comment.length}/${MAX_LENGTH}`}</p>
    </div>
  )
}
