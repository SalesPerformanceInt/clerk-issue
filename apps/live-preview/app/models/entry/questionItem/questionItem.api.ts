import { addEditableTags } from "@contentstack/utils";

import { contentStackClient } from "~/utils/server";

import { getEntryQuery } from "../entry.api";
import type { GetEntryDataProps, GetEntryProps } from "../entry.types";
import type { QuestionItemLivePreview } from "./questionItem.types";

/**
 * Get QuestionItem Data
 */

const getQuestionItemData = async ({
  entryQuery,
  params,
}: GetEntryDataProps) => {
  const contentStackAPI = contentStackClient({ environment: params.env });

  contentStackAPI.livePreviewQuery(entryQuery);

  const questionItemData = (await contentStackAPI
    .ContentType(entryQuery.content_type_uid)
    .Entry(entryQuery.entry_uid)
    .includeContentType()
    .includeReference(["topic", "topic.parent_taxonomy"])
    .toJSON()
    .fetch()) as QuestionItemLivePreview;

  return { questionItemData };
};

/**
 * Get QuestionItem
 */

export const getQuestionItemFromRequest = async ({
  request,
  params,
}: GetEntryProps) => {
  const { entryQuery } = getEntryQuery({ request });

  const { questionItemData } = await getQuestionItemData({
    entryQuery,
    params,
  });

  addEditableTags(questionItemData, entryQuery.content_type_uid, true);

  return { questionItemData };
};

/**
 * Get QuestionItems
 */

type GetQuestionItemsProps = {
  ids: string[];
  env: string;
};

export const getQuestionItemsFromIds = async ({
  ids,
  env,
}: GetQuestionItemsProps) => {
  const contentStackAPI = contentStackClient({ environment: env });

  const questionItemsData = (
    await contentStackAPI
      .ContentType("questionitem")
      .Query()
      .containedIn("topic.uid", ids)
      .includeContentType()
      .toJSON()
      .find()
  )[0] as QuestionItemLivePreview[];

  return { questionItemsData };
};
