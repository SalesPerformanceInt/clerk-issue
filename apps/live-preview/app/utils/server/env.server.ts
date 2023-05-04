/* eslint-disable no-var */
export const getCSENV = () => ({
  QC_CONTENTSTACK_STACK_KEY: process.env.QC_CONTENTSTACK_STACK_KEY as string,
  QC_CONTENTSTACK_DELIVERY_TOKEN: process.env
    .QC_CONTENTSTACK_DELIVERY_TOKEN as string,
  QC_CONTENTSTACK_ENVIRONMENT: process.env
    .QC_CONTENTSTACK_ENVIRONMENT as string,
  QC_CONTENTSTACK_MANAGEMENT_TOKEN: process.env
    .QC_CONTENTSTACK_MANAGEMENT_TOKEN as string,
});

export type CSENV = ReturnType<typeof getCSENV>;

declare global {
  var ENV: CSENV;

  interface Window {
    ENV: CSENV;
  }
}
