import { Container, Datatable, Section } from "accelerate-cms-ui";

import type { EntriesDatatableProps } from "./EntriesDatatable.types";
import { useEntriesDatatable } from "./hooks/useEntriesDatatable";

export const EntriesDatatable = ({ entries }: EntriesDatatableProps) => {
  const { table } = useEntriesDatatable(entries.items);

  return (
    <Container.Main>
      <Section>
        <Section.Header
          title="Entries"
          titleQty={entries.total}
          buttonTitle="+ New Entry"
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
