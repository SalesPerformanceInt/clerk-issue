import type { ButtonProps } from "accelerate-cms-ui";

import type { Entries } from "~/models/entry";

/**
 * EntriesDatatable Props
 */

export type EntriesDatatableProps = {
  entries: Entries;
  newEntry: ButtonProps["onClick"];
};
