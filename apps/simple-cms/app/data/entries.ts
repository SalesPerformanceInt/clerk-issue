export type EntriesStatus = "review" | "published" | "unpublished" | "error";

export type EntriesType = {
  id: string;
  title: string;
  language: string;
  contentType: string;
  version: string;
  status: EntriesStatus;
  modifiedAt: string;
  createdAt: string;
};

export const entriesMockData: EntriesType[] = [
  {
    id: "1",
    title: "Random Entry",
    language: "English - United States",
    contentType: "Collection",
    version: "1.2.14",
    status: "unpublished",
    createdAt: "2020-01-01T00:00:00.000Z",
    modifiedAt: "2 Hours Ago",
  },
  {
    id: "2",
    title: "Random Entry",
    language: "English - United States",
    contentType: "Collection",
    version: "1.2.14",
    status: "published",
    createdAt: "2020-01-01T00:00:00.000Z",
    modifiedAt: "2 Hours Ago",
  },
  {
    id: "3",
    title: "Random Entry",
    language: "English - United States",
    contentType: "Collection",
    version: "1.2.14",
    status: "review",
    createdAt: "2020-01-01T00:00:00.000Z",
    modifiedAt: "2 Hours Ago",
  },
  {
    id: "4",
    title: "Random Entry",
    language: "English - United States",
    contentType: "Collection",
    version: "1.2.14",
    status: "error",
    createdAt: "2020-01-01T00:00:00.000Z",
    modifiedAt: "2 Hours Ago",
  },
];
