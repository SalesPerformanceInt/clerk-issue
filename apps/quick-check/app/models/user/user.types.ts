import type { SerializeFrom } from "@remix-run/node";

import type { GetUser } from "~/graphql";

export type FetchedUser = NonNullable<SerializeFrom<GetUser>>;
