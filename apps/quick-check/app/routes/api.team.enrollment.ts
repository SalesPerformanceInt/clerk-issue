import { json, type ActionFunctionArgs } from "@remix-run/node";

import { z } from "zod";

import { invariant, simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { verifyApiRequest } from "~/models/api";
import { getEnrollmentSkills } from "~/models/enrollment";

const teamsSchema = z.object({
  enrollmentId: z.string().uuid(),
  accountSubdomain: z.string(),
});

export const config = {
  maxDuration: 300,
};

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request);

    verifyApiRequest(request);

    const body = await request.json();

    const { enrollmentId, accountSubdomain } = teamsSchema.parse(body);

    const enrollment = await adminApolloClient.getUserEnrollment(enrollmentId);

    invariant(enrollment, "Error fetching enrollment");

    invariant(
      enrollment?.user.tenant_id === accountSubdomain,
      "Invalid account subdomain",
    );

    const skills = getEnrollmentSkills(enrollment);

    return json({ skills });
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
