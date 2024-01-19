import type { FC } from "react";
import PhoneInput from "react-phone-input-2";

import { useField } from "remix-validated-form";

const textInputClassName =
  "block w-full appearance-none border-gray-200 rounded !border !bg-background !px-2 !py-2 text-gray-700 focus:bg-white text-sm !leading-6";

export interface FormInputProps {
  name: string;
  label: string;
  placeholder?: string;
}

export const FormInput: FC<FormInputProps> = ({ name, label, placeholder }) => {
  const { error, getInputProps } = useField(name);

  return (
    <div className="relative">
      <label htmlFor={name} className="text-xs font-semibold uppercase">
        {label}
      </label>
      <input
        {...getInputProps({ id: name })}
        className={textInputClassName}
        placeholder={placeholder}
      />
      <p className="absolute -bottom-4 text-xs text-red-600">{error}</p>
    </div>
  );
};

export const PhoneFormInput: FC<FormInputProps> = ({ name, label }) => {
  const { error, getInputProps } = useField(name);

  return (
    <div>
      <PhoneInput
        placeholder="+1 (555) 555-5555"
        inputClass={textInputClassName}
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
