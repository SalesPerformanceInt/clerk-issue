import { map } from "remeda"

import { fallbackLng, MatchedMap, supportedLngs } from "quickcheck-shared"

import { DEFAULT_LANGUAGE } from "~/utils/constants"

type ContentStackLanguage = (typeof supportedLngs)[number]

const validLanguages = map(supportedLngs, (lng) => <[ContentStackLanguage, ContentStackLanguage]>[lng, lng])

const contentStackLanguages = new MatchedMap<string, ContentStackLanguage>([
  ...validLanguages,
  ["en-US", fallbackLng],
  ["_", fallbackLng],
])

export const getContentStackLanguage = (language: string) => contentStackLanguages.get(language.toLowerCase())

export { DEFAULT_LANGUAGE }
