/**
 * Content Type Utility
 */

export type WithContentType<T, ContentType extends string> = T & {
  content_type: { uid: ContentType };
};
