import type { DataCslp } from "~/utils/server";

/**
 * Taxonomy Typings
 */

export type Taxonomy = {
  uid: string;
  _content_type_uid: string;
  $: {
    uid: DataCslp;
    _content_type_uid: DataCslp;
  };
};
