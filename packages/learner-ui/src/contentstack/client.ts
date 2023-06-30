import { Stack } from "contentstack";
import {
  getQuestionItem,
  getQuestionItems,
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
  getQuestionItems = getQuestionItems;
  getQuestionItem = getQuestionItem;
  getTheme = getTheme;

  constructor(deliveryToken: string, apiKey: string, environment: string) {
    this.client = getContentStackSDKClient(deliveryToken, apiKey, environment);
  }
}
