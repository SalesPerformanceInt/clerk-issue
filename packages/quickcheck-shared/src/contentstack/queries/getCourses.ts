import type { Query } from "contentstack"
import { difference, isEmpty } from "remeda"

// import type { Taxon } from "~qcs/contentstack";
import type { ContentStackSDKClient } from "~qcs/contentstack/client"

import { logError } from "~qcs/utils/logger"

import { Course } from "../types"

export async function getCourses(this: ContentStackSDKClient, query: (query: Query) => Query = (query) => query) {
  try {
    const withQuickcheckTaxonomy = (q: Query) => query(q.includeReference(["metadata.quickcheck_taxonomy"]))

    const level2Courses = await this.getAllEntries<Course>("level_2_course", withQuickcheckTaxonomy)
    const level3Courses = await this.getAllEntries<Course>("level_3_course", withQuickcheckTaxonomy)

    return [...level2Courses, ...level3Courses]
  } catch (error) {
    logError({ error, log: "getCourses" })
    return null
  }
}
