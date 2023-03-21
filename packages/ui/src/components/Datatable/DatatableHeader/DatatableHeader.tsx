import React from "react";

import { Form } from "~/components/Form";

import { DatatableHeaderItem } from "./DatatableHeaderItem";

export const DatatableHeader = () => {
  return (
    <thead className="flex w-full flex-col px-12 text-dark-200">
      <tr className="flex w-full flex-wrap items-center border-b border-solid border-dark-400 py-6 text-left">
        <DatatableHeaderItem
          title="Title"
          className="flex flex-[2] items-center gap-2"
        >
          <Form.Checkbox id="all" name="all" value="all" />
        </DatatableHeaderItem>

        <DatatableHeaderItem title="Language" className="flex-[1.5]" />

        <DatatableHeaderItem title="Content-Type" />

        <DatatableHeaderItem title="Version" className="flex-[0.75]" />

        <DatatableHeaderItem title="Publish Status" />

        <DatatableHeaderItem title="Modified At" />

        <DatatableHeaderItem className="flex-[0.75]" />
      </tr>
    </thead>
  );
};
