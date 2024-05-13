import { z } from "zod";
import { zfd } from "zod-form-data";

export const unenrollEnrollmentSchema = z.object({
  user_id: z.string().uuid(),
  enrollment_id: zfd.text(z.string().uuid()),
});

export type UnenrollEnrollmentData = z.infer<typeof unenrollEnrollmentSchema>;
