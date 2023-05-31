import type { ReactNode } from "react";

export type DroppableBlankData = {
  order: number;
};

export type DroppableBlankProps = {
  children: ReactNode;
  id: string;
} & Pick<DroppableBlankData, "order">;
