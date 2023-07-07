export const stripHTML = (html?: string) =>
  html?.replace(/<\/?[^>]+(>|$)/g, "");
