import type { SerializeFrom } from "@remix-run/node";

import type { UserWithActiveTokenFragment } from "~/graphql";

export interface UserTableProps {
  users: SerializeFrom<UserWithActiveTokenFragment>[];
  link?: boolean;
}
