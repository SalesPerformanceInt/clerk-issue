import {
  json,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { validationError } from "remix-validated-form";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { sendEmailTemplate } from "~/utils/email/sendEmailTemplate.server";

import {
  getAdminDataFromFromSession,
  getDeleteCookieHeaders,
} from "~/models/session";

import { Landing, landingActionValidator } from "~/pages/Landing";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const searchParams = new URL(request.url).searchParams;
  const message = searchParams.get("message");

  return json(
    { message },
    {
      headers: await getDeleteCookieHeaders(request),
    },
  );
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const result = await landingActionValidator.validate(
    await request.formData(),
  );

  if (result.error) return validationError(result.error);

  const { email } = result.data;

  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const user = await adminApolloClient.getUserByEmail(email);

  if (user) {
    const [now] = await getAdminDataFromFromSession(request);

    await sendEmailTemplate(request, user.user_id, now, {
      type: "RequestedLink",
      data: null,
    });
  }

  return json({ email });
};

export default function Page() {
  const { message } = useLoaderData<typeof loader>();

  return <Landing />;
}
