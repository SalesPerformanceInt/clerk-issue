import { useEffect, useState, type FC } from "react";

import {
  json,
  type ActionFunction,
  type LoaderArgs,
  type SerializeFrom,
} from "@remix-run/node";
import { useLoaderData, useNavigate, useSubmit } from "@remix-run/react";

import { Button } from "accelerate-learner-ui";
import { parsePhoneNumber } from "awesome-phonenumber";
import { isString } from "remeda";
import invariant from "tiny-invariant";
import { apolloClient, type UserWithActiveTokenFragment } from "~/graphql";
import keyIcon from "~/images/key.svg";
import loginIcon from "~/images/login.svg";
import refreshIcon from "~/images/refresh.svg";
import { generateTokenAndSendSMS } from "~/notifications/twilio.server";

interface AdminAction {
  action: "TOGGLE_SMS_ENABLED" | "GENERATE_TOKEN_AND_SEND_SMS" | "RESET_USER";
  userId: string;
}

const parseAdminActionRequest = async (request: Request) => {
  const formData = await request.formData();
  const data = formData.get("data");
  if (isString(data)) {
    return JSON.parse(data) as AdminAction;
  }
};

export const loader = async ({ request }: LoaderArgs) => {
  const { origin } = new URL(request.url);

  const users = (await apolloClient.getAllUsers()) ?? [];

  return json({ users, origin }, { status: 200 });
};

export const action: ActionFunction = async ({ request }) => {
  try {
    const adminAction = await parseAdminActionRequest(request);

    if (adminAction?.action === "TOGGLE_SMS_ENABLED") {
      await apolloClient.toggleUserSMSEnabled(adminAction.userId);
    }

    if (adminAction?.action === "GENERATE_TOKEN_AND_SEND_SMS") {
      const user = await apolloClient.getUser(adminAction.userId);
      invariant(user, "No user found");
      await generateTokenAndSendSMS(user, request);
    }

    if (adminAction?.action === "RESET_USER") {
      await apolloClient.resetUser(adminAction.userId);
    }

    return json({}, { status: 200 });
  } catch (error) {
    return json({ error }, { status: 500 });
  }
};

export default function Page() {
  const { users, origin } = useLoaderData<typeof loader>();

  return (
    <div className="flex h-full w-full items-center justify-center bg-indigo-950 p-8">
      <div className="flex w-full flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full table-auto text-left text-sm">
                <thead className="border-b bg-white font-medium">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Phone
                    </th>
                    <th scope="col" className="w-1 whitespace-nowrap px-6 py-4">
                      SMS Enabled
                    </th>
                    <th scope="col" className="w-1 whitespace-nowrap px-6 py-4">
                      New Token
                    </th>
                    <th scope="col" className="w-1 whitespace-nowrap px-6 py-4">
                      Login
                    </th>
                    <th scope="col" className="w-1 whitespace-nowrap px-6 py-4">
                      Reset
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <UserRow
                      key={user.user_id}
                      user={user}
                      row={index}
                      origin={origin}
                    />
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

const UserRow: FC<{
  user: SerializeFrom<UserWithActiveTokenFragment>;
  row: number;
  origin: string;
}> = ({ user, row, origin }) => {
  const navigate = useNavigate();
  const submit = useSubmit();

  const [checked, setChecked] = useState(user.sms_enabled);

  useEffect(() => {
    setChecked(user.sms_enabled);
  }, [user.sms_enabled]);

  const createUserAction =
    (action: AdminAction["action"], callback?: () => void) => () => {
      callback?.();
      const payload: AdminAction = { action, userId: user.user_id };
      const data = JSON.stringify(payload);
      submit({ data }, { method: "POST" });
    };

  const activeToken = user.active_tokens[0]?.id ?? "";

  return (
    <tr className={`border-b ${row % 2 === 0 ? "bg-neutral-100" : "bg-white"}`}>
      <td className="whitespace-nowrap px-6 py-4">{`${user.first_name} ${user.last_name}`}</td>
      <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
      <td className="whitespace-nowrap px-6 py-4">
        {parsePhoneNumber(user.phone_number ?? "").number?.national}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-center">
        <input
          checked={checked}
          onChange={createUserAction("TOGGLE_SMS_ENABLED", () =>
            setChecked(!checked),
          )}
          id="default-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600"
        />
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-center">
        <Button
          onClick={createUserAction("GENERATE_TOKEN_AND_SEND_SMS")}
          className="h-8 w-auto py-0 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:hover:bg-slate-50"
        >
          <img src={keyIcon} alt="Generate token" />
        </Button>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-center">
        <Button
          disabled={!activeToken}
          onClick={() => navigate(`/t/${activeToken}`)}
          className="h-8 w-auto py-0 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:hover:bg-slate-50"
        >
          <img src={loginIcon} alt="Login" />
        </Button>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-center">
        <Button
          onClick={createUserAction("RESET_USER")}
          className="h-8 w-auto py-0"
        >
          <img src={refreshIcon} alt="Reset" />
        </Button>
      </td>
    </tr>
  );
};
