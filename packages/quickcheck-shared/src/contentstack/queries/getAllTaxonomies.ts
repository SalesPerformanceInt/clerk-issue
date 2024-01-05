import type { Query } from "contentstack";

import type { Taxon } from "~/contentstack";
import type { ContentStackSDKClient } from "~/contentstack/client";

import { logError } from "~/utils/logger";

export async function getAllTaxonomies(
  this: ContentStackSDKClient,
  query: (query: Query) => Query = (query) => query,
) {
  try {
    const contentType = this.client.ContentType("taxon_bottom_up");
    // const result = query(contentType.Query());
    const [result] = (await query(contentType.Query())
      .language(this.language)
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
