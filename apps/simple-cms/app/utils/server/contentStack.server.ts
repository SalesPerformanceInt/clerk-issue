import * as contentStack from "@contentstack/management";

const contentStackClient = contentStack.client();

export const contentStackManagementAPI = contentStackClient.stack({
  api_key: ENV.QC_CONTENTSTACK_STACK_KEY,
  management_token: ENV.QC_CONTENTSTACK_MANAGEMENT_TOKEN,
});
