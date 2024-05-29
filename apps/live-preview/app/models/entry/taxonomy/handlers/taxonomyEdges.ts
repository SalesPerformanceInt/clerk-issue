import type { Edge } from "reactflow"

import { isArray } from "remeda"

import type { EntryToEdge, TaxonLivePreview, TaxonomyTreeProps, ValidBottomUpTaxon } from "../taxonomy.types"

/**
 * Edge Tree Shared Config
 */

const entryToEdge = ({ sourceId, targetId }: EntryToEdge) =>
  <Edge>{
    id: `${sourceId}-${targetId}`,
    source: sourceId,
    target: targetId,
  }

const taxonGuard = (taxon: TaxonLivePreview): taxon is ValidBottomUpTaxon => {
  return !!(taxon.parent_taxonomy && isArray(taxon.parent_taxonomy) && taxon.parent_taxonomy.length)
}

/**
 * Taxonomy Edges
 */

const getTaxonomyEdges = ({
  taxonomyData,
  taxonomyChildren,
}: Pick<TaxonomyTreeProps, "taxonomyData" | "taxonomyChildren">) => {
  const taxonomyRootEdges = taxonGuard(taxonomyData)
    ? taxonomyData.parent_taxonomy.map((taxon) => entryToEdge({ sourceId: taxon.uid, targetId: taxonomyData.uid }))
    : []

  const taxonomyChildrenEdges = taxonomyChildren.map((taxon) =>
    entryToEdge({ sourceId: taxonomyData.uid, targetId: taxon.uid }),
  )

  const taxonomyEdges = [...taxonomyRootEdges, ...taxonomyChildrenEdges]

  return { taxonomyEdges }
}

/**
 * Question Item Edges
 */

const getQuestionItemEdges = ({ questionItemsData }: Pick<TaxonomyTreeProps, "questionItemsData">) => {
  const questionItemEdges = questionItemsData.flatMap((questionItem) =>
    questionItem.topic.map((topic) => entryToEdge({ sourceId: topic.uid, targetId: questionItem.uid })),
  )

  return { questionItemEdges }
}

/**
 * Taxonomy Tree Edges
 */

export const mountTaxonomyTreeEdges = ({ taxonomyData, taxonomyChildren, questionItemsData }: TaxonomyTreeProps) => {
  const { taxonomyEdges } = getTaxonomyEdges({
    taxonomyData,
    taxonomyChildren,
  })

  const { questionItemEdges } = getQuestionItemEdges({ questionItemsData })

  const taxonomyTreeEdges = [...taxonomyEdges, ...questionItemEdges]

  return { taxonomyTreeEdges }
}
