import {
  json,
  redirect,
  type ActionArgs,
  type LoaderArgs,
} from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";

import { faRightToBracket } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import invariant from "tiny-invariant";

import { Button } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

export const loader = async ({ request }: LoaderArgs) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const tenants = (await adminApolloClient.getTenants()) ?? [];
  return json({ tenants }, { status: 200 });
};

export const action = async ({ request }: ActionArgs) => {
  try {
    const body = await request.json();
    const tenantId = body.tenant_id;
    invariant(tenantId, "No tenant found");

    return redirect(`/admin/tenant/${tenantId}`);
  } catch (error) {
    return json({ error }, { status: 500 });
  }
};

export default function Page() {
  const { tenants } = useLoaderData<typeof loader>();
  const submit = useSubmit();

  return (
    <div className="bg-primary-dark p-8">
      <div className="flex w-full flex-col">
        <div className="overflow-x-auto sm:-mx-6 desktop:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 desktop:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full table-auto text-left text-sm">
                <thead className="border-b bg-white font-medium">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Tenant
                    </th>
                    <th scope="col" className="w-full px-6 py-4">
                      # Users
                    </th>
                    <th scope="col" className="w-1 whitespace-nowrap px-6 py-4">
                      View
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tenants.map((tenant, row) => (
                    <tr
                      key={tenant.tenant_id}
                      className={`border-b ${
                        row % 2 === 0 ? "bg-neutral-100" : "bg-white"
                      }`}
                    >
                      <td className="whitespace-nowrap px-6 py-4">
                        {tenant.tenant_id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{`${tenant.users_aggregate.aggregate?.count}`}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-center">
                        <Button
                          loading={false}
                          onClick={() =>
                            submit(tenant, {
                              method: "POST",
                              encType: "application/json",
                            })
                          }
                          className="h-8 w-auto py-0 "
                        >
                          <FontAwesomeIcon icon={faRightToBracket} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
