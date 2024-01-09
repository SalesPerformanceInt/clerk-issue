import React, { useCallback, useMemo, useState } from "react";

import {
  Question,
  useLocalStorage,
  variants,
  type OnSubmit,
  type Variant,
} from "quickcheck-shared";

import type { QuestionItemProps } from "./QuestionItem.types";

export const QuestionItem = ({ questionItem }: QuestionItemProps) => {
  const [score, setScore] = useState<number>();

  const {
    storage: localVariant,
    setLocalStorage: setLocalVariant,
    loaded,
  } = useLocalStorage<Variant>("questionItem");

  /**
   * Variants
   */

  const availableVariants = variants.filter((variant) =>
    questionItem.variants.find((_variant) => variant in _variant),
  );

  const localVariantAvailable = useMemo(
    () =>
      availableVariants.find((variant) => variant === localVariant)
        ? localVariant
        : availableVariants[0],
    [localVariant, availableVariants],
  );

  const variant = useMemo<Variant>(
    () => localVariantAvailable ?? "mcquestion",
    [localVariantAvailable],
  );

  const onChangeVariant = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newVariant = e.target.value as Variant;

    setLocalVariant(newVariant);
  };

  /**
   * Submit Handler
   */

  const onSubmit: OnSubmit = useCallback((selection) => {
    setTimeout(() => setScore(selection.correct ? 25 : 10), 1000);
  }, []);

  /**
   * Close Handler
   */

  const onClose = () => {
    window.location.reload();
  };

  /**
   * Render
   */

  if (!loaded) return <></>;

  return (
    <>
      <Question
        key={questionItem.uid}
        onSubmit={onSubmit}
        variant={variant}
        onClose={onClose}
        onContinue={onClose}
        questionItem={questionItem}
        score={score}
        totalScore={100}
        offset={72}
      />

      {/* <div className="absolute right-3 top-3">
        <select value={variant} onChange={onChangeVariant}>
          {availableVariants.map((variant) => (
            <option value={variant} key={variant}>
              {variant}
            </option>
          ))}
        </select>
      </div> */}
    </>
  );
};
