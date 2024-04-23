import { Query, Stack } from "contentstack";
import { isEmpty } from "remeda";

import {
  getCourses,
  getQuestionItem,
  getQuestionItems,
  getTaxonomies,
  getTaxonomy,
  getTheme,
  getTranslatedStrings,
} from "~qcs/contentstack/queries";

const BATCH_SIZE = 250;

const getContentStackSDKClient = (
  deliveryToken: string,
  apiKey: string,
  environment: string,
) => {
  return new Stack({
    api_key: apiKey,
    delivery_token: deliveryToken,
    environment: environment,
  });
};

export class ContentStackSDKClient {
  client: Stack;
  language: string;

  getQuestionItems = getQuestionItems;
  getQuestionItem = getQuestionItem;
  getTheme = getTheme;
  getTaxonomies = getTaxonomies;
  getTaxonomy = getTaxonomy;
  getCourses = getCourses;
  getTranslatedStrings = getTranslatedStrings;

  async getAllEntries<T>(
    type: string,
    query: (query: Query) => Query = (query) => query,
    batch = 0,
    fetched: T[] = [],
  ): Promise<T[]> {
    const contentType = this.client.ContentType(type);

    const [result] = (await query(contentType.Query())
      .language(this.language)
      .includeFallback()
      .skip(batch * BATCH_SIZE)
      .limit(250)
      .includeContentType()
      .toJSON()
      .find()) as [T[]];

    if (isEmpty(result)) return fetched;

    return this.getAllEntries<T>(type, query, batch + 1, [
      ...fetched,
      ...result,
    ]);
  }

  constructor(
    deliveryToken: string,
    apiKey: string,
    environment: string,
    language: string,
  ) {
    this.language = language;
    this.client = getContentStackSDKClient(deliveryToken, apiKey, environment);
  }
}
