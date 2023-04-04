import { Datatable, MatchedMap } from "accelerate-cms-ui";

import type { EntriesColumn } from "./types";

const languageMap = new MatchedMap<string, string>([
  ["en-us", "English - United States"],
  ["_", "English - United States"],
]);

export const columnLanguage = (columnHelper: EntriesColumn) =>
  columnHelper.accessor("locale", {
    header: () => (
      <Datatable.HeaderItem title="Language" className="!flex-[1.5]" />
    ),

    cell: ({ getValue }) => {
      const language = languageMap.get(getValue());

      return <Datatable.Item.Cell title={language} className="!flex-[1.5]" />;
    },
  });
