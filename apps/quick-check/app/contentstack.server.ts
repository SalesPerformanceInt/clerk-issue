import { map } from "remeda";

import { ContentStackSDKClient, MatchedMap } from "quickcheck-shared";

import { DEFAULT_LANGUAGE } from "~/utils/constants";
import {
  QC_CONTENTSTACK_DELIVERY_TOKEN,
  QC_CONTENTSTACK_ENVIRONMENT,
  QC_CONTENTSTACK_STACK_KEY,
} from "~/utils/envs.server";

const CONTENT_STACK_LANGUES = [
  "en-us",
  "zh-cn",
  "fr-fr",
  "de-de",
  "it-it",
  "ja-jp",
  "pt-br",
  "es-419",
  "tr-tr",
  "zu",
] as const;

type ContentStackLanguage = (typeof CONTENT_STACK_LANGUES)[number];

const validLanguages = map(
  CONTENT_STACK_LANGUES,
  (lng) => <[ContentStackLanguage, ContentStackLanguage]>[lng, lng],
);

const contentStackLanguages = new MatchedMap<string, ContentStackLanguage>([
  ...validLanguages,
  ["en-US", "en-us"],
  ["_", "en-us"],
]);

export const getContentStackLanguage = (language: string) =>
  contentStackLanguages.get(language.toLowerCase());

export { DEFAULT_LANGUAGE };

export const getContentStackClient = (language: string) =>
  new ContentStackSDKClient(
    QC_CONTENTSTACK_DELIVERY_TOKEN,
    QC_CONTENTSTACK_STACK_KEY,
    QC_CONTENTSTACK_ENVIRONMENT,
    getContentStackLanguage(language),
  );
