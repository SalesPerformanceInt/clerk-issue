import { ReactNode } from "react";

export interface BottomDrawerProps {
  height: number | string;
  initial?: boolean;
  children: ReactNode;
  show: boolean;
}
