import type { CheckboxProps } from "~/components/Form";

export type DatatableItemControlProps = {
  title: string;
  className?: string;
} & Pick<CheckboxProps, "id" | "name" | "value" | "checked">;
