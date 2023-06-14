import type { FC } from "react";
import PhoneInput from "react-phone-input-2";

import { useField } from "remix-validated-form";

import type { FormInputProps } from "./FormInput.types";

const textInputStyle =
  "block w-full appearance-none border-gray-200 rounded !border !bg-gray-200 !px-4 !py-3 !leading-tight text-gray-700 focus:bg-white";

export const FormInput: FC<FormInputProps> = ({ name, label }) => {
  const { error, getInputProps } = useField(name);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input {...getInputProps({ id: name })} className={textInputStyle} />
      <p className="mt-2 min-h-[20px] text-sm text-red-600">{error}</p>
    </div>
  );
};

export const PhoneFormInput: FC<FormInputProps> = ({ name, label }) => {
  const { error, getInputProps } = useField(name);

  return (
    <div>
      <PhoneInput
        placeholder="+1 (555) 555-5555"
        inputClass={textInputStyle}
        {...getInputProps()}
        country="us"
        inputProps={{
          id: name,
          name,
        }}
      />
      <p className="mt-2 min-h-[20px] text-sm text-red-600">{error}</p>
    </div>
  );
};
