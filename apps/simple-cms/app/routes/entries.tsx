import React from "react";

import {
  Container,
  Datatable,
  Section,
  Sidenav,
  type SidenavItemProps,
} from "accelerate-cms-ui";

export default function Entries() {
  const contentItems: SidenavItemProps[] = [
    { name: "All Entries", id: "allEntries" },
    { name: "Collection", id: "collection" },
  ];

  const otherItems: SidenavItemProps[] = [{ name: "Other", id: "other" }];

  return (
    <>
      <Container.Main>
        <Container.Side className="max-w-[220px]">
          <Sidenav>
            <Sidenav.List
              items={contentItems}
              listTitle="Content Type"
              buttonTitle="New Content Type"
            />

            <Sidenav.List items={otherItems} listTitle="Other" />
          </Sidenav>
        </Container.Side>

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

              <Datatable.Content />
            </Datatable>
          </Section>
        </Container.Main>
      </Container.Main>
    </>
  );
}
