import { type LoaderArgs } from "@remix-run/node";
import { useMatches, useSearchParams } from "@remix-run/react";

import { generateTheme } from "./generateTheme";
import { alternateTheme, mockTheme } from "./mockTheme";
import type { MatchTheme } from "./themes.types";

/**
 * UseMatchTheme
 */

export const useTheme = () => {
  const match: MatchTheme = useMatches().find(
    (match) => match.data && "theme" in match.data,
  );

  const theme = generateTheme(match?.data.theme);

  return { theme };
};

// Both next functions are temporary, just to showcase a theme switcher.

/**
 * UseToggleTheme
 */

export const useToggleTheme = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const toggleTheme = () => {
    const currentTheme = searchParams.get("theme");

    const themes = ["default", "alternate"];

    const nextTheme = currentTheme
      ? themes.find((theme) => theme !== currentTheme) || "default"
      : "alternate";

    setSearchParams({ theme: nextTheme });
  };

  return {
    toggleTheme,
  };
};

/**
 * GetTheme
 */

export const getTheme = ({ request }: Pick<LoaderArgs, "request">) => {
  const url = new URL(request.url);
  const currentTheme = url.searchParams.get("theme");

  const theme = currentTheme
    ? currentTheme === "default"
      ? mockTheme
      : alternateTheme
    : null;

  return { theme };
};
