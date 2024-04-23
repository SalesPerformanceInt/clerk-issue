import { getContentStackClient } from "~/contentstack.server";
import { keys, mergeAll } from "remeda";

import { SupportedLanguage, supportedLngs } from "quickcheck-shared";

import { DEFAULT_LANGUAGE } from "~/contentstack";

import { QC_CONTENTSTACK_TRANSLATION_ID } from "~/utils/envs.server";

export const getTranslatedStringsReport = async () => {
  const translationPromises = supportedLngs.map(async (language) => {
    const contentStack = getContentStackClient(language);

    const translation = await contentStack.getTranslatedStrings(
      QC_CONTENTSTACK_TRANSLATION_ID,
    );

    const squashed = translation?.translations.value.reduce(
      (acc, { key, value }) => ({
        ...acc,
        [key]: value,
      }),
      {} as Record<string, string>,
    );

    return {
      [language]: squashed ?? null,
    };
  });

  const translations = await Promise.all(translationPromises);

  const merged = mergeAll(translations) as Record<
    SupportedLanguage,
    Record<string, string>
  >;

  const translationKeys = keys(merged[DEFAULT_LANGUAGE]).sort();

  const rows = translationKeys.map((key) => ({
    key,
    "en-us": merged["en-us"]?.[key] ?? null,
    "pt-br": merged["pt-br"]?.[key] ?? null,
    "zh-cn": merged["zh-cn"]?.[key] ?? null,
    "fr-fr": merged["fr-fr"]?.[key] ?? null,
    "de-de": merged["de-de"]?.[key] ?? null,
    "es-419": merged["es-419"]?.[key] ?? null,
    "it-it": merged["it-it"]?.[key] ?? null,
    "tr-tr": merged["tr-tr"]?.[key] ?? null,
    "ja-jp": merged["ja-jp"]?.[key] ?? null,
  }));

  return rows;
};

export const translatedStringsHeaders = [
  {
    key: "key",
    label: "Key",
  },
  {
    key: "en-us",
    label: "English (en-us)",
  },
  {
    key: "pt-br",
    label: "Portuguese (pt-br)",
  },
  {
    key: "zh-cn",
    label: "Chinese (zh-cn)",
  },
  {
    key: "fr-fr",
    label: "French (fr-fr)",
  },
  {
    key: "de-de",
    label: "German (de-de)",
  },
  {
    key: "es-419",
    label: "Spanish (es-419)",
  },
  {
    key: "it-it",
    label: "Italian (it-it)",
  },
  {
    key: "tr-tr",
    label: "Turkish (tr-tr)",
  },
  {
    key: "ja-jp",
    label: "Japanese (ja-jp)",
  },
];
