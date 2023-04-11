/* eslint-disable no-var */
export const getCSENV = () => ({
  CS_API_KEY: process.env.CS_API_KEY as string,
  CS_MANAGEMENT_TOKEN: process.env.CS_MANAGEMENT_TOKEN as string,
});

export type CSENV = ReturnType<typeof getCSENV>;

declare global {
  var ENV: CSENV;

  interface Window {
    ENV: CSENV;
  }
}
