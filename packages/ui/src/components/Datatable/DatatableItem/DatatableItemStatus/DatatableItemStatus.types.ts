export type DatatableItemStatusOptions =
  | "review"
  | "published"
  | "unpublished"
  | "error";

export type DatatableItemStatusProps = {
  status: DatatableItemStatusOptions;
  className?: string;
};

export type DatatableItemStatusMap = {
  title: string;
  color: string;
};
