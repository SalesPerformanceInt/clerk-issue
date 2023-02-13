import React from "react";

import { BreadcrumbsItem } from "./BreadcrumbsItem";

import type { BreadcrumbsProps } from "./Breadcrumbs.types";

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <ol
      itemScope
      itemType="https://schema.org/BreadcrumbList"
      className="flex gap-3 text-sm font-semibold text-primary-300"
    >
      {items.map((item, index) => (
        <li
          key={item.label}
          itemScope
          itemProp="itemListElement"
          itemType="https://schema.org/ListItem"
        >
          <BreadcrumbsItem {...item} />

          {index !== items.length - 1 && (
            <span className="text-light-200">/</span>
          )}
        </li>
      ))}
    </ol>
  );
};
