import React, { useMemo } from "react";

import {
  Question,
  useLocalStorage,
  variants,
  type Variant,
} from "accelerate-learner-ui";

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

  const variant = useMemo<Variant>(
    () => localVariant ?? availableVariants[0] ?? "mcquestion",
    [localVariant, availableVariants],
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
        onSubmit={() => undefined}
        variant={variant}
        onClose={onClose}
        onContinue={onClose}
        questionItem={questionItem}
        offset={50}
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
