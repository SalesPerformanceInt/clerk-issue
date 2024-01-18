import { contentStackClient } from "~/utils/server";
import { getCSENV } from "~/utils/server/env.server";

import { getEntryQuery } from "../entry.api";
import type { GetEntryDataProps, GetEntryProps } from "../entry.types";
import type { TaxonLivePreview } from "./taxonomy.types";

/**
 * Taxonomy Children
 */

const getTaxonomyChildren = async ({ entryQuery }: GetEntryDataProps) => {
  const contentStackAPI = contentStackClient({
    environment: getCSENV().QC_CONTENTSTACK_ENVIRONMENT,
  });

  const taxonomyChildren = (
    (await contentStackAPI
      .ContentType(entryQuery.content_type_uid)
      .Query()
      .where("parent_taxonomy.uid", entryQuery.entry_uid)
      .includeContentType()
      .toJSON()
      .find()) as [TaxonLivePreview[]]
  )[0];

  return { taxonomyChildren };
};

/**
 * Get Taxonomy Data
 */

const getTaxonomyData = async ({ entryQuery }: GetEntryDataProps) => {
  const contentStackAPI = contentStackClient({
    environment: getCSENV().QC_CONTENTSTACK_ENVIRONMENT,
  });

  contentStackAPI.livePreviewQuery({
    content_type_uid: entryQuery.content_type_uid,
    live_preview: entryQuery.live_preview,
  });

  const taxonomyData = (await contentStackAPI
    .ContentType(entryQuery.content_type_uid)
    .Query()
    .includeContentType()
    .includeReference("parent_taxonomy")
    .toJSON()
    .findOne()) as TaxonLivePreview;

  return { taxonomyData };
};

/**
 * Get Taxonomy
 */

export const getTaxonomyTreeFromRequest = async ({
  request,
}: GetEntryProps) => {
  const { entryQuery } = getEntryQuery({ request });

  if (!entryQuery || !entryQuery.entry_uid || !entryQuery.content_type_uid)
    return null;

  const { taxonomyChildren } = await getTaxonomyChildren({
    entryQuery,
  });

  const { taxonomyData } = await getTaxonomyData({ entryQuery });

  const taxonIds = taxonomyChildren
    .map((taxon) => taxon.uid)
    .concat(taxonomyData.uid);

  return { taxonomyChildren, taxonomyData, taxonIds };
};
