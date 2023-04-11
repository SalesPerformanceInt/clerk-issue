import type { DataCslp } from "~/utils/server";

/**
 * Publish Details Typings
 */

export type PublishDetail = {
  environment: string;
  locale: string;
  time: string;
  user: string;
  version: number;
  $: {
    environment: DataCslp;
    locale: DataCslp;
    time: DataCslp;
    user: DataCslp;
    version: DataCslp;
  };
};
