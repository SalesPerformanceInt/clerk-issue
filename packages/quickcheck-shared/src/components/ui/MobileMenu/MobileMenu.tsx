import { type FC, type ReactNode } from "react";
import { useMeasure } from "react-use";

import { useIsDesktop } from "~/utils/useIsDesktop";

import { ResponsiveContainer } from "~/components";

interface MobileMenuProps {
  children: ReactNode;
}

export const MobileMenu: FC<MobileMenuProps> = ({ children }) => {
  const isDesktop = useIsDesktop();
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  if (isDesktop) return null;

  return (
    <>
      <div style={{ height }} />
      <ResponsiveContainer
        ref={ref}
        className="fixed bottom-0 bg-background inset-x-0 box-border border-t border-secondary"
      >
        {children}
      </ResponsiveContainer>
    </>
  );
};
