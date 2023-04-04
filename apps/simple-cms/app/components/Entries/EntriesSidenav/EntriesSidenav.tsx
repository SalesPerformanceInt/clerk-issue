import { Container, Sidenav } from "accelerate-cms-ui";

import { contentItems, otherItems } from "./mockEntriesSidenav";

export const EntriesSidenav = () => {
  return (
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
  );
};
