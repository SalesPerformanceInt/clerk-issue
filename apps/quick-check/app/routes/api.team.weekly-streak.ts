import { json, type ActionFunctionArgs } from "@remix-run/node";

import { z } from "zod";

import { invariant, simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { verifyApiRequest } from "~/models/api";

const teamsSchema = z.object({
  userId: z.string().uuid(),
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

    const { userId, accountSubdomain } = teamsSchema.parse(body);

    const result = await adminApolloClient.getUserWeeklyStreakCalendar({
      userId,
    });

    invariant(result, "Error fetching data");

    const { weeklyStreak, calendar, tenant_id } = result;

    invariant(tenant_id === accountSubdomain, "Invalid account subdomain");

    return json({ weeklyStreak, calendar });
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
