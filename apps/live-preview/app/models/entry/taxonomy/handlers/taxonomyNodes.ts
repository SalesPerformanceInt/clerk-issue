import { Position, type Node } from "reactflow"

import { isArray, map, pipe, sortBy } from "remeda"

import type { EntryToNode, TaxonLivePreview, TaxonomyTreeProps, ValidBottomUpTaxon } from "../taxonomy.types"

/**
 * Node Tree Shared Config
 */

const entryToNode = (entry: EntryToNode, type: "taxon_bottom_up" | "questionitem") =>
  <Node>{
    id: entry.uid,
    data: {
      label: entry.title,
      href: `https://app.contentstack.com/#!/stack/bltaf3e7b9abde0e86a/content-type/${type}/en-us/entry/${entry.uid}/edit?branch=main`,
    },
    position: { x: 0, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    type: "taxonomyNode",
  }

const taxonGuard = (taxon: TaxonLivePreview): taxon is ValidBottomUpTaxon => {
  return !!(taxon.parent_taxonomy && isArray(taxon.parent_taxonomy) && taxon.parent_taxonomy.length)
}

/**
 * Taxonomy Nodes
 */

const getTaxonomyNodes = ({
  taxonomyData,
  taxonomyChildren,
}: Pick<TaxonomyTreeProps, "taxonomyData" | "taxonomyChildren">) => {
  const taxonNode: Node = {
    ...entryToNode(taxonomyData, "taxon_bottom_up"),
    data: {
      label: taxonomyData.title,
      highlight: true,
    },
  }

  const taxonomyRootNodes = taxonGuard(taxonomyData)
    ? taxonomyData.parent_taxonomy.map((taxon) => entryToNode(taxon, "taxon_bottom_up"))
    : []

  const taxonomyChildrenNodes = taxonomyChildren.map((taxon) => entryToNode(taxon, "taxon_bottom_up"))

  const taxonomyNodes = [taxonNode, ...taxonomyRootNodes, ...taxonomyChildrenNodes]

  return { taxonomyNodes }
}

/**
 * Question Item Nodes
 */

const getQuestionItemNodes = ({
  questionItemsData,
  taxonIds,
}: Pick<TaxonomyTreeProps, "questionItemsData" | "taxonIds">) => {
  const questionItemNodes = pipe(
    questionItemsData,
    sortBy((node) => taxonIds.findIndex((taxonId) => node.topic.find((topic) => topic.uid === taxonId))),
    map((questionItemData) => entryToNode(questionItemData, "questionitem")),
  )

  return { questionItemNodes }
}

/**
 * Taxonomy Tree Nodes
 */

export const mountTaxonomyTreeNodes = ({
  taxonomyData,
  taxonomyChildren,
  questionItemsData,
  taxonIds,
}: TaxonomyTreeProps) => {
  const { taxonomyNodes } = getTaxonomyNodes({
    taxonomyData,
    taxonomyChildren,
  })

  const { questionItemNodes } = getQuestionItemNodes({
    questionItemsData,
    taxonIds,
  })

  const taxonomyTreeNodes = [...taxonomyNodes, ...questionItemNodes]

  return { taxonomyTreeNodes }
}
