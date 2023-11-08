import { json, type LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getAdminApolloClientFromRequest } from "~/graphql";

export const loader = async ({ request }: LoaderArgs) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const tenants = (await adminApolloClient.getTenants()) ?? [];
  return json({ tenants }, { status: 200 });
};

export default function Page() {
  const { tenants } = useLoaderData<typeof loader>();

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
                        <Link
                          className="text-primary-50 hover:underline hover:text-primary-75"
                          to={`/admin/tenant/${tenant.tenant_id}`}
                        >
                          {tenant.tenant_id}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{`${tenant.users_aggregate.aggregate?.count}`}</td>
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
