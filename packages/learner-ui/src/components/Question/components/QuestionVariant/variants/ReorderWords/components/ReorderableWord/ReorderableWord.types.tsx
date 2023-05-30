import type { UniqueIdentifier } from "@dnd-kit/core";

export type ReorderableWordProps = {
  text: UniqueIdentifier;
  id: UniqueIdentifier;
  container?: UniqueIdentifier;
  disabled: boolean;
};
