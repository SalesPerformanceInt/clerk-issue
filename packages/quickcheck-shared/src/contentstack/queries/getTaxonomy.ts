import type { Taxon } from "~/contentstack";
import type { ContentStackSDKClient } from "~/contentstack/client";

import { logError } from "~/utils/logger";

export async function getTaxonomy(this: ContentStackSDKClient, uid: string) {
  try {
    const contentType = this.client.ContentType("taxon_bottom_up");

    const entry = contentType
      .Entry(uid)
      .language(this.language)
      .includeContentType()
      .toJSON();

    return (await entry.fetch()) as Taxon;
  } catch (error) {
    logError({ error, log: "getTaxonomy" });
    return null;
  }
}
