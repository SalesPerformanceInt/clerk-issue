import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";

export const surveySchema = z.object({
  sentiment: z.string(),
  comment: z.string().max(500).optional(),
});

export const surveyValidator = withZod(surveySchema);

export type SurveyResponse = z.infer<typeof surveySchema>;
