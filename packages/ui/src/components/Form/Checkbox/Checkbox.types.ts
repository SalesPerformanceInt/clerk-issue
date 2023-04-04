export type CheckboxProps = {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  label?: string;
  legend?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
