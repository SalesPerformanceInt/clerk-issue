import { useOutletContext as _useOutletContext } from "@remix-run/react";

export type OutletContext = {
  now: string;
  isAdminEnabled: boolean;
};

export const useOutletContext = _useOutletContext<OutletContext>;