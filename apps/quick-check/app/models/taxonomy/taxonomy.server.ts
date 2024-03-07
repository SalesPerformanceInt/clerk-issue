import type { RawNodeDatum } from "react-d3-tree";

import { getContentStackClient } from "~/contentstack.server";
import { isArray } from "remeda";

import { buildTrees, type Taxon, type TreeNode } from "quickcheck-shared";

import { DEFAULT_LANGUAGE } from "~/contentstack";

import type { TaxonomyDataObj } from "./taxonomy.types";

export const toTaxonomyDataObj = (taxonomy: Taxon): TaxonomyDataObj => {
  const parentTaxonomy = isArray(taxonomy.parent_taxonomy)
    ? taxonomy.parent_taxonomy[0]
    : null;

  return {
    title: taxonomy.title,
    uid: taxonomy.uid,
    id: taxonomy.uid,
    parentId: parentTaxonomy?.uid,
  };
};

export const treeNodeToRawNodeDatum = <T extends TaxonomyDataObj>(
  node: TreeNode<T>,
): RawNodeDatum => {
  const { dataObj } = node;
  return {
    name: dataObj.title,
    children: node.children.map(treeNodeToRawNodeDatum),
    attributes: {
      uid: dataObj.uid,
    },
  };
};

export const buildTaxonTrees = async () => {
  const contentStack = getContentStackClient(DEFAULT_LANGUAGE);
  const taxonomies = (await contentStack.getTaxonomies()) ?? [];

  const taxonomyDataObjects = taxonomies.map(toTaxonomyDataObj);

  const trees = buildTrees(taxonomyDataObjects);
  return trees;
};
