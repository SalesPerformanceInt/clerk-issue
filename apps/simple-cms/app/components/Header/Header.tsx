import React from "react";

import { Header as HeaderComponent } from "accelerate-cms-ui";

export const Header = () => {
  return (
    <HeaderComponent
      breadcrumbs={[
        {
          label: "Home",
          href: "#",
        },
      ]}
      title="Accelerate CMS"
    />
  );
};
