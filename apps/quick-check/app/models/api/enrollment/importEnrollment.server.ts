import { z } from "zod";
import { zfd } from "zod-form-data";

import { importUserSchema } from "../user";

const ZOD_DATE_REGEX_ARGS = [
  /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/,
  { message: "invalid date" },
] as const;

export const inputEnrollmentSchema = z.object({
  user: importUserSchema,
  enrollment_id: zfd.text(z.string().uuid()),
  cms_topic_id: zfd.text(),
  start_date: zfd.text(z.string().regex(...ZOD_DATE_REGEX_ARGS)),
  expiration_date: zfd.text(z.string().regex(...ZOD_DATE_REGEX_ARGS)),
});

export type ImportEnrollmentData = z.infer<typeof inputEnrollmentSchema>;
