import * as contentStack from "contentstack";

/**
 * ContentStack Client Props
 */

type ContentStackClientProps = {
  environment?: string;
};

/**
 * Content Stack Live Preview Types
 */

export type DataCslp = {
  [key: string]: string;
};

export type Metadata = {
  uid: string;
  $: {
    uid: DataCslp;
  };
};

/**
 * ContentStack Client
 */

export const contentStackClient = ({
  environment,
}: ContentStackClientProps = {}) =>
  contentStack.Stack({
    api_key: ENV.CS_API_KEY,
    delivery_token: ENV.CS_DELIVERY_TOKEN,
    environment: "",
    live_preview: {
      enable: true,
      management_token: ENV.CS_MANAGEMENT_TOKEN,
      host: "api.contentstack.io",
    },
  });
