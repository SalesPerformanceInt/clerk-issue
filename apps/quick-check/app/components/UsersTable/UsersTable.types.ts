import type { SerializeFrom } from "@vercel/remix"

import type { AdminUserDataFragment } from "~/graphql"

export interface UserTableProps {
  users: SerializeFrom<AdminUserDataFragment>[]
  link?: boolean
}
