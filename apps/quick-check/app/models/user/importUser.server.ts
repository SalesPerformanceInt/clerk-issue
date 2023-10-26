import { map } from "remeda";
import invariant from "tiny-invariant";
import { z } from "zod";
import { zfd } from "zod-form-data";

import {
  getAdminApolloClientFromRequest,
  type User_Insert_Input,
} from "~/graphql";

const ZOD_DATE_REGEX_ARGS = [
  /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/,
  { message: "invalid date" },
] as const;

const schema = z.object({
  user_id: zfd.text(z.string().uuid()),
  account_subdomain: zfd.text(),
  user_email: zfd.text(z.string().email()),
  user_first_name: zfd.text(),
  user_last_name: zfd.text(),
  start_date: zfd.text(z.string().regex(...ZOD_DATE_REGEX_ARGS)),
  expiration_date: zfd.text(z.string().regex(...ZOD_DATE_REGEX_ARGS)),
  user_language: zfd.text(z.string().optional()),
  cms_topic_ids: zfd.repeatable(z.array(zfd.text()).min(1)),
});

export type ImportUserData = z.infer<typeof schema>;

const formatUserInputFromImport = (
  data: ImportUserData,
): User_Insert_Input => ({
  user_id: data.user_id,
  tenant_id: data.account_subdomain,
  first_name: data.user_first_name,
  last_name: data.user_last_name,
  email: data.user_email,
  language_preference: data.user_language,
});

export const importUser = async (request: Request) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const body = await request.json();
  const importUserData = schema.parse(body);
  const userInputData = formatUserInputFromImport(importUserData);

  const user = await adminApolloClient.upsertUser(userInputData);
  invariant(user, "invalid user params");

  const userId = user.user_id;
  const enrollments = await Promise.all(
    map(importUserData.cms_topic_ids, (topicId) =>
      adminApolloClient.enrollUser(topicId, { userId }),
    ),
  );

  return { user, enrollments };
};
