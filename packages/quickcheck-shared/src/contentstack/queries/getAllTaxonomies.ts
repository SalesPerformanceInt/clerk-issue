import type { Query } from "contentstack";
import { isEmpty } from "remeda";

import type { Taxon } from "~qcs/contentstack";
import type { ContentStackSDKClient } from "~qcs/contentstack/client";

import { logError } from "~qcs/utils/logger";

const BATCH_SIZE = 250;

export async function getAllTaxonomies(
  this: ContentStackSDKClient,
  query: (query: Query) => Query = (query) => query,
) {
  try {
    const contentType = this.client.ContentType("taxon_bottom_up");

    const getTaxonomies = async (
      batch = 0,
      fetched: Taxon[] = [],
    ): Promise<Taxon[]> => {
      const [result] = (await query(contentType.Query())
        .language(this.language)
        .includeFallback()
        .includeReference(["parent_taxonomy"])
        .skip(batch * BATCH_SIZE)
        .limit(250)
        .includeContentType()
        .toJSON()
        .find()) as [Taxon[]];

      if (isEmpty(result)) return fetched;

      return getTaxonomies(batch + 1, [...fetched, ...result]);
    };

    return await getTaxonomies();
  } catch (error) {
    logError({ error, log: "getAllTaxonomies" });
    return null;
  }
}
