import type { ReactNode } from "react";

import type { DataCSLP } from "~/contentstack";

export type DroppableContainerProps = {
  children: ReactNode;
  id: string;
  className?: string;
  liveEdit?: DataCSLP;
};
