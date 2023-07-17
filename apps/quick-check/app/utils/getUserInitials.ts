import type { User } from "~/graphql";

const getIntial = (name: string) => name.substring(0, 1).toUpperCase();

export const getUserIntials = ({
  first_name,
  last_name,
}: Pick<User, "first_name" | "last_name">) =>
  `${getIntial(first_name)}${getIntial(last_name)}`;
