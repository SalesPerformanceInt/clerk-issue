import { map } from "remeda";

import {
  ContentStackSDKClient,
  fallbackLng,
  MatchedMap,
  supportedLngs,
} from "quickcheck-shared";

import { DEFAULT_LANGUAGE } from "~/utils/constants";
import {
  QC_CONTENTSTACK_DELIVERY_TOKEN,
  QC_CONTENTSTACK_ENVIRONMENT,
  QC_CONTENTSTACK_STACK_KEY,
} from "~/utils/envs.server";

type ContentStackLanguage = (typeof supportedLngs)[number];

const validLanguages = map(
  supportedLngs,
  (lng) => <[ContentStackLanguage, ContentStackLanguage]>[lng, lng],
);

const contentStackLanguages = new MatchedMap<string, ContentStackLanguage>([
  ...validLanguages,
  ["en-US", fallbackLng],
  ["_", fallbackLng],
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
