import type { SerializeFrom } from "@remix-run/node";

import type { AdminUserDataFragment } from "~/graphql";

export interface UserTableProps {
  users: SerializeFrom<AdminUserDataFragment>[];
  link?: boolean;
}
