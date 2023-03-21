import React from "react";

import { CheckIcon } from "@radix-ui/react-icons";

import type { CheckboxProps } from "./Checkbox.types";

export const Checkbox = ({
  id,
  name,
  value,
  checked,
  legend,
}: CheckboxProps) => {
  return (
    <fieldset className="flex flex-wrap">
      <legend className="hidden"> {legend} </legend>

      <input
        id={id}
        name={name}
        value={value}
        checked={checked}
        type="checkbox"
        className="h-0 w-0 opacity-0 [&:checked~label>div]:border-primary-300 [&:checked~label>div]:bg-primary-300 [&:checked~label>div_svg]:visible"
      />

      <label htmlFor={id} className="flex cursor-pointer items-center gap-3">
        <div className="flex h-[18px] w-[18px] items-center justify-center rounded-[4px] border-2 border-solid border-dark-200">
          <CheckIcon className="invisible scale-[1.4] text-dark-700" />
        </div>
      </label>
    </fieldset>
  );
};
