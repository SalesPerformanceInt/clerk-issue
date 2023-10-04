import { initReactI18next } from "react-i18next";

import i18n from "i18next";
import Backend, { HttpBackendOptions } from "i18next-http-backend";

import { getBackendOptions, i18nConfig } from "../src";

const CONTENTSTACK_ENVS = {
  QC_CONTENTSTACK_STACK_KEY:
    import.meta.env.STORYBOOK_QC_CONTENTSTACK_STACK_KEY ?? "",
  QC_CONTENTSTACK_DELIVERY_TOKEN:
    import.meta.env.STORYBOOK_QC_CONTENTSTACK_DELIVERY_TOKEN ?? "",
  QC_CONTENTSTACK_ENVIRONMENT:
    import.meta.env.STORYBOOK_QC_CONTENTSTACK_ENVIRONMENT ?? "",
};

i18n
  .use(initReactI18next)
  .use(Backend)
  .init<HttpBackendOptions>({
    ...i18nConfig,
    debug: true,
    backend: getBackendOptions(CONTENTSTACK_ENVS),
    detection: {
      order: ["htmlTag"],
      caches: [],
    },
  });

export default i18n;
