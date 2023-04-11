import * as contentStack from "contentstack";

export const contentStackClient = contentStack.Stack({
  api_key: ENV.CS_API_KEY,
  delivery_token: ENV.CS_DELIVERY_TOKEN,
  environment: ENV.CS_ENV,
  live_preview: {
    enable: true,
    management_token: ENV.CS_MANAGEMENT_TOKEN,
    host: "api.contentstack.io",
  },
});
