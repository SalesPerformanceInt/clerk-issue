import { json, type ActionFunctionArgs } from "@remix-run/node";

import { z } from "zod";

import { invariant, simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { verifyApiRequest } from "~/models/api";

export const teamsSchema = z.object({
  enrollmentIds: z.string().uuid().array(),
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

    const { enrollmentIds, accountSubdomain } = teamsSchema.parse(body);

    const enrollments = await adminApolloClient.getTeamEnrollments(
      enrollmentIds,
      accountSubdomain,
    );

    invariant(enrollments, "Error fetching enrollments");

    return json({ enrollments });
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
