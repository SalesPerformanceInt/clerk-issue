import { ContentStackSDKClient } from "quickcheck-shared"

import {
  QC_CONTENTSTACK_DELIVERY_TOKEN,
  QC_CONTENTSTACK_ENVIRONMENT,
  QC_CONTENTSTACK_STACK_KEY,
} from "~/utils/envs.server"

import { getContentStackLanguage } from "./contentstack"

export const getContentStackClient = (language: string) =>
  new ContentStackSDKClient(
    QC_CONTENTSTACK_DELIVERY_TOKEN,
    QC_CONTENTSTACK_STACK_KEY,
    QC_CONTENTSTACK_ENVIRONMENT,
    getContentStackLanguage(language),
  )
