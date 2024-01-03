import type { TaxonomyTreeProps } from "../taxonomy.types";
import { mountTaxonomyTreeEdges } from "./taxonomyEdges";
import { mountTaxonomyTreeNodes } from "./taxonomyNodes";

/**
 * Taxonomy Tree
 */

export const mountTaxonomyTree = (taxonomyTreeProps: TaxonomyTreeProps) => {
  const { taxonomyTreeNodes } = mountTaxonomyTreeNodes(taxonomyTreeProps);
  const { taxonomyTreeEdges } = mountTaxonomyTreeEdges(taxonomyTreeProps);

  return {
    nodes: taxonomyTreeNodes,
    edges: taxonomyTreeEdges,
  };
};
