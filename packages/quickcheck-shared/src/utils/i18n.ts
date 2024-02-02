import Backend, { type HttpBackendOptions } from "i18next-http-backend";
import { fromPairs, map, pipe } from "remeda";
import { RemixI18Next } from "remix-i18next";

const CONTENTSTACK_BASE_URL = "cdn.contentstack.io";
const TRANSLATION_CONTENT_TYPE = "translated_strings";
// const TRANSLATION_ENTRY_UID = "blt37f4a4753e3711ad"; // "blt2a119974ec2050b6";

export type ContentStackEnvs = {
  QC_CONTENTSTACK_DELIVERY_TOKEN: string;
  QC_CONTENTSTACK_STACK_KEY: string;
  QC_CONTENTSTACK_ENVIRONMENT: string;
  QC_CONTENTSTACK_TRANSLATION_ID: string;
};

interface TranslatedStrings {
  entry: {
    translations: {
      value: Record<string, string>[];
    };
  };
}

const supportedLngs = ["en-us", "pt-br"];
const fallbackLng = "en-us";

export const i18nConfig = {
  supportedLngs,
  fallbackLng,
  defaultNS: "translation",
  react: { useSuspense: false },
  lowerCaseLng: true,
  load: "currentOnly" as const,
};

export const getBackendOptions = (
  envs: ContentStackEnvs,
): HttpBackendOptions => ({
  loadPath: function (_lngs, _namespaces) {
    const path = `https://${CONTENTSTACK_BASE_URL}/v3/content_types/${TRANSLATION_CONTENT_TYPE}/entries/${envs.QC_CONTENTSTACK_TRANSLATION_ID}?environment=${envs.QC_CONTENTSTACK_ENVIRONMENT}&locale={{lng}}&include_fallback=true`;
    return path;
  },
  parse: (data) => {
    return pipe(
      data,
      (data) => JSON.parse(data) as TranslatedStrings,
      ({ entry }) => entry.translations.value,
      map(({ key, value }) => [key, value] as [string, string]),
      (data) => fromPairs(data),
    );
  },
  customHeaders: {
    api_key: envs.QC_CONTENTSTACK_STACK_KEY,
    access_token: envs.QC_CONTENTSTACK_DELIVERY_TOKEN,
  },
});

export const getRemixI18next = (envs: ContentStackEnvs) =>
  new RemixI18Next({
    detection: {
      supportedLanguages: supportedLngs,
      fallbackLanguage: fallbackLng,
    },
    // This is the configuration for i18next used
    // when translating messages server-side only
    i18next: {
      ...i18nConfig,
      backend: getBackendOptions(envs),
    },
    plugins: [Backend],
  });
