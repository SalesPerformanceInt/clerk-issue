import type { Query } from "contentstack"
import { isEmpty } from "remeda"

import type { Taxon } from "~qcs/contentstack"
import type { ContentStackSDKClient } from "~qcs/contentstack/client"

import { logError } from "~qcs/utils/logger"

const BATCH_SIZE = 250

export async function getTaxonomies(this: ContentStackSDKClient, query: (query: Query) => Query = (query) => query) {
  try {
    return await this.getAllEntries<Taxon>("taxon_bottom_up", (q) => query(q.includeReference(["parent_taxonomy"])))
  } catch (error) {
    logError({ error, log: "getAllTaxonomies" })
    return null
  }
}
