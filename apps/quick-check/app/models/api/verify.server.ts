import { IMPORT_SECRET_KEY } from "~/utils/envs.server";

export const verifyImportRequest = (request: Request) => {
  if (request.headers.get("secret_key") !== IMPORT_SECRET_KEY)
    throw new Error("Unauthorized");
};
