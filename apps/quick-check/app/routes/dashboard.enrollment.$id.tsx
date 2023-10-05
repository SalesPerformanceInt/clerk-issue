import { json, redirect, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import invariant from "tiny-invariant";

import { getUserApolloClientFromRequest } from "~/graphql";

import { requireUserSession } from "~/models/session";

import { Enrollment } from "~/pages/Enrollment";

export const loader = async ({ params, request }: LoaderArgs) => {
  try {
    await requireUserSession(request);

    const { id } = params;

    invariant(id, "ID not found");

    const userApolloClient = await getUserApolloClientFromRequest(request);
    const enrollment = await userApolloClient.getUserEnrollment(id);

    invariant(enrollment, "user enrollment not found");

    return json({ enrollment });
  } catch (error) {
    throw redirect("/");
  }
};

export default function UserEnrollmentPage() {
  const { enrollment } = useLoaderData<typeof loader>();

  return <Enrollment enrollment={enrollment} />;
}
