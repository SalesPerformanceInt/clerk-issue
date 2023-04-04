import * as contentStack from "@contentstack/management";

const contentStackClient = contentStack.client();

export const contentStackManagementAPI = contentStackClient.stack({
  api_key: ENV.CS_API_KEY,
  management_token: ENV.CS_MANAGEMENT_TOKEN,
});
