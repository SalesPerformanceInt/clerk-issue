import { useLoaderData, useNavigate, useParams } from "@remix-run/react";
import {
  json,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "@vercel/remix";

import { faChevronLeft } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { invariant, simpleErrorResponse } from "quickcheck-shared";

import { getAdminApolloClientFromRequest } from "~/graphql";

import { useOutletContext } from "~/utils/outletContext";

import { performAdminAction } from "~/models/admin";
import {
  formatUserInputFromImport,
  parseCreateUserRequest,
} from "~/models/api";
import { authAdminSession } from "~/models/session";

import { CreateUserForm, UsersTable } from "~/components";

export const config = {
  maxDuration: 300,
};

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const authAdmin = await authAdminSession(request);
  if (authAdmin) return authAdmin;

  const { tenantId } = params;
  invariant(tenantId, "Tenant ID not found");

  const adminApolloClient = await getAdminApolloClientFromRequest(request);

  const users = (await adminApolloClient.getTenantUsers({ tenantId })) ?? [];
  return json({ users }, { status: 200 });
};

export const action = async ({ request, params }: ActionFunctionArgs) => {
  try {
    const { tenantId } = params;
    invariant(tenantId, "Tenant ID not found");

    const requestForAdminAction = request.clone();

    const adminApolloClient = await getAdminApolloClientFromRequest(request);
    const formData = await request.formData();

    const createUserInput = parseCreateUserRequest(formData);

    if (createUserInput) {
      const [userInputData, proxyData] =
        formatUserInputFromImport(createUserInput);

      await adminApolloClient.upsertUser(userInputData, proxyData);
      return json({ ok: true });
    }

    return performAdminAction(requestForAdminAction);
  } catch (error) {
    return simpleErrorResponse(error);
  }
};

export default function Page() {
  const { users } = useLoaderData<typeof loader>();
  const { tenantId } = useParams();
  const navigate = useNavigate();

  const { isAdminEnabled } = useOutletContext();

  return (
    <div className="sm:p-8">
      <div className="flex w-full flex-col">
        <div className="overflow-x-auto sm:-mx-6 desktop:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 desktop:px-8">
            <div className="mb-8 flex items-center justify-between px-4 pt-4 sm:p-0">
              <button
                className="flex items-center"
                onClick={() => navigate("/admin")}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="w-6 text-center text-4xl leading-6 text-primary-75 sm:w-[10px] sm:text-base"
                />
                <div className="ml-4 font-bold text-primary-75">Tenants</div>
              </button>
              <h1 className="text-center text-4xl font-bold">{tenantId}</h1>
              <div />
            </div>

            <div className="mb-8 overflow-hidden">
              <UsersTable users={users} link />
            </div>

            {isAdminEnabled && <CreateUserForm />}
          </div>
        </div>
      </div>
    </div>
  );
}
