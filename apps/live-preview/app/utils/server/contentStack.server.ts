import * as contentStack from "contentstack"

/**
 * ContentStack Client Props
 */

type ContentStackClientProps = {
  environment?: string
}

/**
 * ContentStack Client
 */

export const contentStackClient = ({ environment }: ContentStackClientProps = {}) =>
  contentStack.Stack({
    api_key: ENV.QC_CONTENTSTACK_STACK_KEY,
    delivery_token: ENV.QC_CONTENTSTACK_DELIVERY_TOKEN,
    environment: environment || ENV.QC_CONTENTSTACK_ENVIRONMENT,
    live_preview: {
      enable: true,
      management_token: ENV.QC_CONTENTSTACK_MANAGEMENT_TOKEN,
      host: "api.contentstack.io",
    },
  })
