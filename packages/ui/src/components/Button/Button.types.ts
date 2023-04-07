import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  title?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
