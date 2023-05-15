export const REGEX_REMOVE_STYLE = / style=(['"]).*?\1/g;

export const cleanHTML = (html: string) => html.replace(REGEX_REMOVE_STYLE, '');