import type { QuickcheckTheme } from "~qcs/contentstack"
import type { ContentStackSDKClient } from "~qcs/contentstack/client"

import { logError } from "~qcs/utils/logger"

export async function getTheme(this: ContentStackSDKClient, uid: string) {
  try {
    const contentType = this.client.ContentType("theme")

    const entry = contentType.Entry(uid).language(this.language).includeFallback().includeContentType().toJSON()

    return (await entry.fetch()) as QuickcheckTheme
  } catch (error) {
    logError({ error, log: "getTheme" })
    return null
  }
}
