import { json, type ActionFunctionArgs } from "@remix-run/node";

import { logError, simpleErrorResponse } from "quickcheck-shared";

import { getUserApolloClientFromRequest } from "~/graphql";

import { getToday } from "~/utils/date";
import { SURVEY_ID } from "~/utils/envs.server";
import { capturePosthogEvent } from "~/utils/posthog";

import { getUserDataFromSession } from "~/models/session";

export const config = {
  maxDuration: 300,
};

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const [now, userId] = await getUserDataFromSession(request);
    const today = getToday(now);

    const formData = await request.formData();
    const sleep = formData.get("sleep") === "true";

    if (userId) {
      await capturePosthogEvent({
        distinctId: userId,
        event: "survey dismissed",
        properties: {
          $survey_id: SURVEY_ID,
        },
      });
    }

    if (sleep) {
      const userApolloClient = await getUserApolloClientFromRequest(request);
      await userApolloClient.updateUser({ survey_dismissed: today });
    }

    return json({}, { status: 200 });
  } catch (error) {
    logError({ error, log: "/dismissSurvey" });
    return simpleErrorResponse(error);
  }
};
