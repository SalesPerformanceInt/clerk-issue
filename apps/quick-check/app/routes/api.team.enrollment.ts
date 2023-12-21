import { json, type ActionArgs } from "@remix-run/node";

import { z } from "zod";

import { invariant, simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { verifyApiRequest } from "~/models/api";
import { getEnrollmentSkills } from "~/models/enrollment";

export const teamsSchema = z.object({
  enrollmentId: z.string().uuid(),
  language: z.string(),
});

export const config = {
  maxDuration: 300,
};

export const action = async ({ request }: ActionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request);

    verifyApiRequest(request);

    const body = await request.json();

    const { enrollmentId, language } = teamsSchema.parse(body);

    const enrollment = await adminApolloClient.getUserEnrollment(enrollmentId);

    invariant(enrollment, "Error fetching enrollment");

    const skills = getEnrollmentSkills(enrollment);

    return json({ skills });
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
