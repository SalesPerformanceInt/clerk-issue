import { Stack } from "contentstack";

import {
  getAllTaxonomies,
  getQuestionItem,
  getQuestionItems,
  getTaxonomy,
  getTheme,
} from "~/contentstack/queries";

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
  getAllTaxonomies = getAllTaxonomies;
  getTaxonomy = getTaxonomy;

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
