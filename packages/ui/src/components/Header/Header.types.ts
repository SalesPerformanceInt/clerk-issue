import type { BreadcrumbsProps } from "~/components/Breadcrumbs/Breadcrumbs.types";

export type HeaderProps = {
  title: string;
  breadcrumbs: BreadcrumbsProps["items"];
  contentLabel?: string;
};
