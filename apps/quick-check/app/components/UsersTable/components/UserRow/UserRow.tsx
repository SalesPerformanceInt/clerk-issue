import { useEffect, useState, type FC } from "react";

import { Link, useNavigation, useSubmit } from "@remix-run/react";

import {
  faArrowsRotate,
  faEnvelope,
  faKey,
  faRightToBracket,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { parsePhoneNumber } from "libphonenumber-js";
import {
  parseAdminActionRequest,
  type AdminAction,
} from "~/routes/admin.tenant.$tenantId";

import { Button } from "quickcheck-shared";

import type { UserRowProps } from "./UserRow.types";

export const UserRow: FC<UserRowProps> = ({ user, row, link }) => {
  const submit = useSubmit();

  const { state, formData } = useNavigation();

  const [checked, setChecked] = useState(user.sms_enabled);

  useEffect(() => {
    setChecked(user.sms_enabled);
  }, [user.sms_enabled]);

  const isLoading = (actionType: AdminAction["type"]) => {
    if (state === "idle") return false;
    const data = parseAdminActionRequest(formData);
    return data?.userId === user.user_id && actionType === data?.type;
  };

  const makeUserAction =
    (type: AdminAction["type"], callback?: () => void) => () => {
      callback?.();
      const payload: AdminAction = { type, userId: user.user_id };
      const data = JSON.stringify(payload);

      const formData = new FormData();
      formData.append("data", data);

      submit(formData, { method: "POST" });
    };

  const activeToken = user.active_tokens[0]?.id ?? "";

  const fullName = `${user.first_name} ${user.last_name}`;

  return (
    <tr className={`border-b ${row % 2 === 0 ? "bg-neutral-100" : "bg-white"}`}>
      <td className="whitespace-nowrap px-6 py-4">
        {link ? (
          <Link
            className="text-primary-50 hover:underline hover:text-primary-75"
            to={`/admin/user/${user.user_id}`}
          >
            {fullName}
          </Link>
        ) : (
          fullName
        )}
      </td>
      <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
      <td className="whitespace-nowrap px-6 py-4">
        {user.phone_number &&
          parsePhoneNumber(user.phone_number, "US").formatNational()}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-center">
        <input
          checked={checked}
          onChange={makeUserAction("TOGGLE_SMS_ENABLED", () =>
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
          loading={isLoading("GENERATE_TOKEN_AND_SEND_SMS")}
          onClick={makeUserAction("GENERATE_TOKEN_AND_SEND_SMS")}
          className="h-8 w-auto py-0 "
        >
          <FontAwesomeIcon icon={faKey} />
        </Button>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-center">
        <Button
          disabled={!activeToken}
          loading={isLoading("LOGIN_USER")}
          onClick={makeUserAction("LOGIN_USER")}
          className="h-8 w-auto py-0"
        >
          <FontAwesomeIcon icon={faRightToBracket} />
        </Button>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-center">
        <Button
          loading={isLoading("RESET_USER")}
          onClick={makeUserAction("RESET_USER")}
          className="h-8 w-auto py-0"
        >
          <FontAwesomeIcon icon={faArrowsRotate} />
        </Button>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-center">
        <Button
          disabled={!activeToken}
          loading={isLoading("SEND_QUESTION_EMAIL")}
          onClick={makeUserAction("SEND_QUESTION_EMAIL")}
          className="h-8 w-auto py-0"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </Button>
      </td>
    </tr>
  );
};
