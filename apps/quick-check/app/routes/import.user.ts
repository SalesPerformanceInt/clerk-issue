import { json, type ActionArgs } from "@remix-run/node";

import { importUser } from "~/models/user";

export const action = async ({ request }: ActionArgs) => {
  const result = await importUser(request);
  return json(result);
};
