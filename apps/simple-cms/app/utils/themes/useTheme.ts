import { useMatches } from "@remix-run/react";

import { generateTheme } from "./generateTheme";
import type { MatchTheme } from "./themes.types";

export const useTheme = () => {
  const match: MatchTheme = useMatches().find(
    (match) => match.data && "theme" in match.data,
  );

  const theme = generateTheme(match?.data.theme);

  return { theme };
};
