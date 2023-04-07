import { useMatches } from "@remix-run/react";

export const useRouteData = <T>(routeId: string): T | undefined => {
  const matches = useMatches();
  const data = matches.find((match) => match.id === routeId)?.data as
    | T
    | undefined;

  return data;
};
