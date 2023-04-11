export const generateTheme = (theme?: Record<string, string>) => {
  if (!theme) return "";

  const themeVariables = Object.entries(theme)
    .map(([key, value]) => `${key}: ${value};`)
    .join("\n");

  return `:root { ${themeVariables} }`;
};
