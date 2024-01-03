import React, { useMemo } from "react";

import {
  Question,
  useLocalStorage,
  variants,
  type Variant,
} from "quickcheck-shared";

import type { QuestionItemProps } from "./QuestionItem.types";

export const QuestionItem = ({ questionItem }: QuestionItemProps) => {
  const {
    storage: localVariant,
    setLocalStorage: setLocalVariant,
    loaded,
  } = useLocalStorage<Variant>("questionItem");

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

  const onClose = () => {
    window.location.reload();
  };

  const onChangeVariant = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newVariant = e.target.value as Variant;

    setLocalVariant(newVariant);
  };

  if (!loaded) return <></>;

  return (
    <>
      <Question
        key={questionItem.uid}
        onSubmit={() => undefined}
        variant={variant}
        onClose={onClose}
        onContinue={onClose}
        questionItem={questionItem}
        offset={72}
      />
      <div className="absolute right-3 top-3">
        <select value={variant} onChange={onChangeVariant}>
          {availableVariants.map((variant) => (
            <option value={variant} key={variant}>
              {variant}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
