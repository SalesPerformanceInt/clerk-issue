import { I18nextProvider, initReactI18next } from "react-i18next";

import { createInstance } from "i18next";
import Backend, { HttpBackendOptions } from "i18next-http-backend";

import { getBackendOptions, i18nConfig } from "quickcheck-shared";

const CONTENTSTACK_ENVS = {
  QC_CONTENTSTACK_STACK_KEY: process.env.QC_CONTENTSTACK_STACK_KEY ?? "",
  QC_CONTENTSTACK_DELIVERY_TOKEN:
    process.env.QC_CONTENTSTACK_DELIVERY_TOKEN ?? "",
  QC_CONTENTSTACK_ENVIRONMENT: process.env.QC_CONTENTSTACK_ENVIRONMENT ?? "",
};

const i18n = createInstance();

i18n
  .use(initReactI18next)
  .use(Backend)
  .init<HttpBackendOptions>({
    ...i18nConfig,
    backend: getBackendOptions(CONTENTSTACK_ENVS),
  });

export { i18n };
