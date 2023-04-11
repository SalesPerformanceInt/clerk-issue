import type { ContentstackCollection } from "@contentstack/management/types/contentstackCollection";
import type { Entry as ContentStackEntry } from "@contentstack/management/types/stack/contentType/entry";

/**
 * Single Entry
 */

export type Entry = ContentStackEntry & {
  content_type_uid: string;
  created_at: string;
  created_by: string;
  locale: string;
  publish_details: unknown[];
  tags: string[];
  title: string;
  uid: string;
  updated_at?: string;
  updated_by?: string;
  _version: number;
};

/**
 * Multiple Entries
 */

export type Entries = ContentstackCollection<Entry>;
