import type { UserDataWithName } from "./types";

const getInitial = (name?: string) => name?.substring(0, 1).toUpperCase();

export const getUserInitials = (user?: UserDataWithName | null) =>
  `${getInitial(user?.first_name)}${getInitial(user?.last_name)}`;
