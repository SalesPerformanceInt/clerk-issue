import { IMPORT_SECRET_KEY } from "~/utils/envs.server";

export const verifyApiRequest = (request: Request) => {
  if (request.headers.get("Authorization") !== IMPORT_SECRET_KEY)
    throw new Error("Unauthorized");
};
