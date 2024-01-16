import { type LoaderFunctionArgs } from "@remix-run/node";

import { typedjson, useTypedLoaderData } from "remix-typedjson";

import { getQuestionItemsFromIds } from "~/models/entry/questionItem";
import { getTaxonomyTreeFromRequest } from "~/models/entry/taxonomy";
import { mountTaxonomyTree } from "~/models/entry/taxonomy/handlers/taxonomyTree";

import { TaxonomyLivePreview } from "~/components/Taxonomy";

/**
 * Loader
 */

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const taxonomyResponse = await getTaxonomyTreeFromRequest({
    request,
    params,
  });

  if (!taxonomyResponse)
    return typedjson({
      taxonomyTree: {
        nodes: [],
        edges: [],
      },
    });

  const { taxonomyChildren, taxonomyData, taxonIds } = taxonomyResponse;

  const { questionItemsData } = await getQuestionItemsFromIds({
    env: params.env!,
    ids: taxonIds,
  });

  const taxonomyTree = mountTaxonomyTree({
    taxonomyChildren,
    taxonomyData,
    questionItemsData,
    taxonIds,
  });

  return typedjson({ taxonomyTree });
};

/**
 * Route Component
 */

export default function TaxonomyRoute() {
  const { taxonomyTree } = useTypedLoaderData<typeof loader>();

  return <TaxonomyLivePreview taxonomyTree={taxonomyTree} />;
}
