import { Container, Datatable, Section } from "accelerate-cms-ui";

import type { EntriesDatatableProps } from "./EntriesDatatable.types";
import { useEntriesDatatable } from "./hooks/useEntriesDatatable";

export const EntriesDatatable = ({ entries }: EntriesDatatableProps) => {
  const { table } = useEntriesDatatable(entries);

  return (
    <Container.Main>
      <Section>
        <Section.Header
          title="Entries"
          titleQty={6}
          buttonTitle="+ New Entry"
        />

        <Datatable>
          <Datatable.Selected selectedQty={2}>
            <button> Unpublish </button>

            <button> Publish </button>
          </Datatable.Selected>

          <Datatable.Content table={table} />
        </Datatable>
      </Section>
    </Container.Main>
  );
};
