import { useLoaderData } from "@remix-run/react";
import {
  json,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "@vercel/remix";

import { validationError } from "remix-validated-form";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { sendNotification } from "~/models/notification/notificationSender";
import {
  getAdminDataFromFromSession,
  getDeleteCookieHeaders,
} from "~/models/session";

import {
  Landing,
  landingActionValidator,
  type LandingActionResponse,
} from "~/pages/Landing";

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

    await sendNotification({
      now,
      request,
      userId: user.user_id,
      template: {
        notificationType: "RequestedLink",
      },
    });
  }

  return json<LandingActionResponse>({ email, ok: true });
};

export default function Page() {
  const { message } = useLoaderData<typeof loader>();

  return <Landing />;
}
