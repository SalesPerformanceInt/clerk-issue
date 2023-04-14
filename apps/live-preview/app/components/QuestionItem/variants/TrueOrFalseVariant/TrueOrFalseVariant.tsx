import React from "react";

import type {
  QuestionItemVariant,
  TrueOrFalseVariantProps,
} from "./TrueOrFalseVariant.types";

export const TrueOrFalseVariant = (props: QuestionItemVariant) => {
  const { tfquestion, showConfidence, onVariantSelect, onGoBackClick } =
    props as TrueOrFalseVariantProps;

  return <></>;
};
