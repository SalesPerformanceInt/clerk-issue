import {
  json,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "@remix-run/node";
import {
  Link,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";

import { faTrash } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { z } from "zod";

import { Button, simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { parseSchema } from "~/utils/parseSchema";

export const adminTenantListActionSchema = z.object({
  type: z.enum(["DELETE_TENANT"]),
  tenantId: z.string(),
});
export type AdminTenantListAction = z.infer<typeof adminTenantListActionSchema>;

export const parseAdminTenantListActionRequest = (formData?: FormData) => {
  const data = formData?.get("data");
  return parseSchema(data, adminTenantListActionSchema);
};

export const config = {
  maxDuration: 300,
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const tenants = (await adminApolloClient.getTenants()) ?? [];
  return json({ tenants }, { status: 200 });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const adminApolloClient = await getAdminApolloClientFromRequest(request);
    const formData = await request.formData();

    const adminAction = parseAdminTenantListActionRequest(formData);

    if (adminAction?.type === "DELETE_TENANT") {
      await adminApolloClient.deleteTenant(adminAction.tenantId);
    }

    const { type, tenantId } = adminAction ?? {};

    return json({ type, tenantId, ...adminAction }, { status: 200 });
  } catch (error) {
    return simpleErrorResponse(error);
  }
};

export default function Page() {
  const { tenants } = useLoaderData<typeof loader>();

  const submit = useSubmit();
  const { state, formData } = useNavigation();

  const isLoading = (
    actionType: AdminTenantListAction["type"],
    tenantId: string,
  ) => {
    if (state === "idle") return false;

    const data = parseAdminTenantListActionRequest(formData);
    return tenantId === data?.tenantId && actionType === data?.type;
  };

  const makeAdminAction =
    (
      type: AdminTenantListAction["type"],
      tenantId: string,
      callback?: () => void,
    ) =>
    () => {
      callback?.();
      const payload: AdminTenantListAction = { type, tenantId };
      const data = JSON.stringify(payload);

      const formData = new FormData();
      formData.append("data", data);

      submit(formData, { method: "POST" });
    };

  const confirmDelete = (tenantId: string) => () => {
    const confirmAction = window.prompt(
      "Please type the tenant ID to confirm deletion",
    );

    if (confirmAction !== tenantId) {
      window.alert("Tenant ID does not match");

      throw new Error("Tenant ID does not match");
    }
  };

  return (
    <div className="sm:p-8">
      <div className="flex w-full flex-col">
        <div className="overflow-x-auto sm:-mx-6 desktop:-mx-8">
          <div className="inline-block min-w-full sm:px-6 desktop:px-8">
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
                      Delete
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
                          className="text-primary-50 hover:text-primary-75 hover:underline"
                          to={`/admin/tenant/${tenant.tenant_id}`}
                        >
                          {tenant.tenant_id}
                        </Link>
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">{`${tenant.users_aggregate.aggregate?.count}`}</td>

                      <td className="whitespace-nowrap px-6 py-4 text-center">
                        <Button
                          loading={isLoading("DELETE_TENANT", tenant.tenant_id)}
                          onClick={makeAdminAction(
                            "DELETE_TENANT",
                            tenant.tenant_id,
                            confirmDelete(tenant.tenant_id),
                          )}
                          className="h-8 w-auto py-0 "
                        >
                          <FontAwesomeIcon icon={faTrash} />
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
