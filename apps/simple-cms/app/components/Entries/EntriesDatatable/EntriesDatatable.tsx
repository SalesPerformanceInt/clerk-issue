import { Container, Datatable, Section } from "accelerate-cms-ui";

import { useEntriesDatatable } from "./hooks/useEntriesDatatable";

import type { EntriesDatatableProps } from "./EntriesDatatable.types";

/**
 * EntriesDatatable Component
 */

export const EntriesDatatable = ({
  entries,
  newEntry,
}: EntriesDatatableProps) => {
  const { table } = useEntriesDatatable(entries.items);

  return (
    <Container.Main>
      <Section>
        <Section.Header
          title="Entries"
          titleQty={entries.items.length}
          buttonProps={{
            title: "Toggle Theme",
            onClick: newEntry,
          }}
        />

        <Datatable>
          <Datatable.Selected
            selectedQty={table.getSelectedRowModel().rows.length}
          >
            <button> Unpublish </button>

            <button> Publish </button>
          </Datatable.Selected>

          <Datatable.Content table={table} />
        </Datatable>
      </Section>
    </Container.Main>
  );
};
