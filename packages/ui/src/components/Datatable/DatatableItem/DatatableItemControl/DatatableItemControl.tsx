import React from "react";

import classNames from "classnames";

import { Form } from "~/components/Form";

import { DatatableItemCell } from "../DatatableItemCell";
import type { DatatableItemControlProps } from "./DatatableItemControl.types";

export const DatatableItemControl = ({
  title,
  id,
  name,
  value,
  checked,
  className,
}: DatatableItemControlProps) => {
  return (
    <DatatableItemCell
      title={title}
      className={classNames("flex items-center gap-2", className)}
    >
      <Form.Checkbox id={id} name={name} value={value} checked={checked} />
    </DatatableItemCell>
  );
};
