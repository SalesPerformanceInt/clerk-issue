import React from "react";

import type { BreadcrumbsItemProps } from "./BreadcrumbsItem.types";

export const BreadcrumbsItem = ({
  label,
  href,
  metaContent,
}: BreadcrumbsItemProps) => {
  return (
    <>
      <a
        href={href || "#"}
        className="mr-2"
        itemScope
        itemProp="item"
        itemType="https://schema.org/Thing"
        itemID={href || label}
      >
        <span itemProp="name"> {label} </span>
      </a>

      <meta itemProp="position" content={metaContent} />
    </>
  );
};
