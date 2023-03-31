/* eslint-disable no-var */
export const getCSENV = () => ({
  CS_API_KEY: process.env.CS_API_KEY as string,
  CS_DELIVERY_TOKEN: process.env.CS_DELIVERY_TOKEN as string,
  CS_ENV: process.env.CS_ENV as string,
  CS_API_HOST: process.env.CS_API_HOST as string,
});

export type CSENV = ReturnType<typeof getCSENV>;

declare global {
  var ENV: CSENV;

  interface Window {
    ENV: CSENV;
  }
}
