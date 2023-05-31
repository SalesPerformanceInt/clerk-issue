import type { UniqueIdentifier } from "@dnd-kit/core";

export type ReorderableWordData = {
  text: string;
  container?: UniqueIdentifier;
};

export type ReorderableWordProps = {
  id: UniqueIdentifier;
  disabled: boolean;
} & ReorderableWordData;
