import { useMemo, useState } from "react";

import type {
  QuestionItemChoice,
  QuestionItemData,
  QuestionItemSelected,
  QuestionItemVariantList,
} from "../QuestionItem.types";
import { questionItemVariantMap } from "../questionItemVariantMap";

/**
 * UseQuestionItem Hook
 */

type UseQuestionItemProps = {
  questionItem: QuestionItemData;
};

export const useQuestionItem = ({ questionItem }: UseQuestionItemProps) => {
  /**
   * UseQuestionItem States
   */

  const [selected, setSelected] = useState<QuestionItemSelected>(null);
  const [showConfidence, setShowConfidence] = useState(false);
  const [numberOfConfettiPieces, setNumberOfConfettiPieces] = useState<
    number | null
  >(null);

  const variants = useMemo(
    () =>
      questionItem.variants.reduce((variants, variant, variantIndex) => {
        const variantName = Object.keys(variant).filter(
          (variantKeys) => variantKeys !== "__typename",
        )[0];

        const variantConfig = {
          variantId: variant.__typename || variantIndex,
          variantData: variant,
          VariantComponent: questionItemVariantMap.get(variantName),
        };

        return [...variants, variantConfig];
      }, [] as QuestionItemVariantList[]),
    [questionItem],
  );

  /**
   * UseQuestionItem Handlers
   */

  const onVariantSelect = ({ choice }: QuestionItemChoice) => {
    setSelected(selected ? null : choice);

    setShowConfidence(!showConfidence);
  };

  const onGoBackClick = () => {
    setSelected(null);

    setShowConfidence(false);
  };

  const onConfidenceClick = (numberOfPieces: number) => {
    if (selected?.correct) setNumberOfConfettiPieces(numberOfPieces);

    setShowConfidence(false);
  };

  const onConfettiComplete = () => {
    setNumberOfConfettiPieces(null);
  };

  /**
   * UseQuestionItem Return
   */

  return {
    selected,
    showConfidence,
    numberOfConfettiPieces,
    variants,
    onVariantSelect,
    onGoBackClick,
    onConfidenceClick,
    onConfettiComplete,
  };
};
