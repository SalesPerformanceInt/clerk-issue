import type { SerializeFrom } from "@remix-run/node";

import type { UserWithActiveTokenFragment } from "~/graphql";

export interface UserRowProps {
  user: SerializeFrom<UserWithActiveTokenFragment>;
  row: number;
}
