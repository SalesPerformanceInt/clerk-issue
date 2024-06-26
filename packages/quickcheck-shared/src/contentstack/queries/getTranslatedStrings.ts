import type { TranslatedStrings } from "~qcs/contentstack"
import type { ContentStackSDKClient } from "~qcs/contentstack/client"

import { logError } from "~qcs/utils/logger"

export async function getTranslatedStrings(this: ContentStackSDKClient) {
  try {
    return await this.getAllEntries<TranslatedStrings>("translated_strings")
  } catch (error) {
    logError({ error, log: "getTranslatedStrings" })
    return null
  }
}
