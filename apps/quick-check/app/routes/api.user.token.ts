import { json, type ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { cors } from "remix-utils/cors";
import { invariant, simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { getLoginUrl } from "~/utils/urls";
import {
  ALLOWED_ORIGIN_REGEX,
} from "~/utils/envs.server";

import { getUserSchema, verifyApiRequest } from "~/models/api";
import { getUserActiveToken } from "~/models/token";

export const config = {
  maxDuration: 300,
};

// Browser will send the options request so we need to handle options request with allow cors origin header.
// Just returning null with 204 status.
export async function loader({ request }: LoaderFunctionArgs) {
	let response = json(null, { status: 204 });
  // this mutates the Response object
	await cors(request, response, { origin: new RegExp(ALLOWED_ORIGIN_REGEX) });
	return response;
}

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request);

    verifyApiRequest(request);

    const body = await request.json();

    const userData = getUserSchema.parse(body);
    const user = await adminApolloClient.getUser(userData);

    invariant(user, `User not found for id: ${userData.userId}`);

    const token = await getUserActiveToken(request, {
      userId: user.user_id,
      tenantId: user.tenant_id,
    });

    const response = {
      id: user.user_id,
      token: token.id,
      loginUrl: getLoginUrl(token.id, request),
      questionsAvailable: 0, //TODO: find the user's unanswered question count
    };

    const jsonResponse = json(response);
    // this mutates the jsonResponse object
    await cors(request, jsonResponse, { origin: new RegExp(ALLOWED_ORIGIN_REGEX) });
    return jsonResponse
  } catch (error) {
    return simpleErrorResponse(error);
  }
};
