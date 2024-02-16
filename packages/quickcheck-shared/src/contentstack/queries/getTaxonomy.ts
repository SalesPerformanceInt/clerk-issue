import type { Taxon } from "~qcs/contentstack";
import type { ContentStackSDKClient } from "~qcs/contentstack/client";

import { logError } from "~qcs/utils/logger";

export async function getTaxonomy(this: ContentStackSDKClient, uid: string) {
  try {
    const contentType = this.client.ContentType("taxon_bottom_up");

    const entry = contentType
      .Entry(uid)
      .language(this.language)
      .includeFallback()
      .includeContentType()
      .toJSON();

    return (await entry.fetch()) as Taxon;
  } catch (error) {
    logError({ error, log: "getTaxonomy" });
    return null;
  }
}
