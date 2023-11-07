import { z } from "zod";
import { zfd } from "zod-form-data";

import { type UpsertUserInput } from "~/graphql";

import { parseSchema } from "~/utils/parseSchema";

export const importUserSchema = z.object({
  user_id: z.string().uuid(),
  account_subdomain: z.string(),
  email: z.string().email(),
  first_name: z.string().min(1, { message: "Required" }),
  last_name: z.string().min(1, { message: "Required" }),
  language: z.string().optional(),
  phone_number: z.string().optional(),
});

export type ImportUserData = z.infer<typeof importUserSchema>;

export const formatUserInputFromImport = ({
  language,
  account_subdomain,
  ...data
}: ImportUserData): UpsertUserInput => ({
  ...data,
  tenant_id: account_subdomain,
  language_preference: language,
});

export const parseCreateUserRequest = (formData?: FormData) => {
  const data = formData && Object.fromEntries([...formData.entries()]);
  return parseSchema(data, importUserSchema);
};