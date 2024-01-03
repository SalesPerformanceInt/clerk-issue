import type { Edge, Node } from "reactflow";

import type { Taxon } from "quickcheck-shared";

import type { WithContentType } from "~/models/livePreview.types";

import type { QuestionItemLivePreview } from "../questionItem/questionItem.types";

/**
 * Taxon LP
 */

export type TaxonLivePreview = WithContentType<Taxon, "taxon_bottom_up">;

/**
 * Valid Bottom Up Taxon
 */

export type ValidBottomUpTaxon = TaxonLivePreview & {
  parent_taxonomy: TaxonLivePreview[];
};

/**
 * Nodes and Edges
 */

export type EntryToNode = {
  uid: string;
  title: string;
};

export type EntryToEdge = {
  sourceId: string;
  targetId: string;
};

/**
 * Taxonomy Tree
 */

export type TaxonomyTree = {
  nodes: Node[];
  edges: Edge[];
};

export type TaxonomyTreeProps = {
  taxonomyChildren: TaxonLivePreview[];
  taxonomyData: TaxonLivePreview;
  questionItemsData: QuestionItemLivePreview[];
  taxonIds: string[];
};
