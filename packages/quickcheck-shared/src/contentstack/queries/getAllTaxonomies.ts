import type { Query } from "contentstack";

import type { Taxon } from "~qcs/contentstack";
import type { ContentStackSDKClient } from "~qcs/contentstack/client";

import { logError } from "~qcs/utils/logger";

export async function getAllTaxonomies(
  this: ContentStackSDKClient,
  query: (query: Query) => Query = (query) => query,
) {
  try {
    const contentType = this.client.ContentType("taxon_bottom_up");

    const [result] = (await query(contentType.Query())
      .language(this.language)
      .includeFallback()
      .includeReference(["parent_taxonomy"])
      .limit(1000)
      .includeContentType()
      .toJSON()
      .find()) as [Taxon[]];

    return result;
  } catch (error) {
    logError({ error, log: "getAllTaxonomies" });
    return null;
  }
}
