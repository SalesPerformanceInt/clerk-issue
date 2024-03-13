import { useEffect, useState, type FC } from "react";
import type { SerializeFrom } from "@remix-run/node";
import { Link, useNavigation, useSubmit } from "@remix-run/react";

import {
  faArrowsRotate,
  faEnvelope,
  faKey,
  faRightToBracket,
  faSpinner,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

import { Button, supportedLngs } from "quickcheck-shared";

import { getContentStackLanguage } from "~/contentstack";
import type { UserWithActiveTokenFragment } from "~/graphql";

import { useOutletContext } from "~/utils/outletContext";

import { parseAdminActionRequest, type AdminAction } from "~/models/admin";

export interface UserRowProps {
  user: SerializeFrom<UserWithActiveTokenFragment>;
  row: number;
  link?: boolean;
}

export const UserRow: FC<UserRowProps> = ({ user, row, link }) => {
  const { isAdminEnabled } = useOutletContext();
  const submit = useSubmit();

  const { state, formData } = useNavigation();

  const [dailyEmailEnabled, setDailyEmailEnabled] = useState(
    user.daily_email_enabled,
  );
  const [showLeaderboard, setShowLeaderboard] = useState(user.show_leaderboard);
  const [language, setLanguage] = useState(
    getContentStackLanguage(user.language_preference),
  );

  useEffect(() => {
    setDailyEmailEnabled(user.daily_email_enabled);
  }, [user.daily_email_enabled]);

  const isLoading = (actionType: AdminAction["type"]) => {
    if (state === "idle") return false;
    const data = parseAdminActionRequest(formData);
    return data?.userId === user.user_id && actionType === data?.type;
  };

  const makeUserAction =
    (
      type: AdminAction["type"],
      callback?: () => void,
      other?: Omit<AdminAction, "type" | "userId" | "tenantId">,
    ) =>
    () => {
      callback?.();
      const payload: AdminAction = {
        type,
        userId: user.user_id,
        tenantId: user.tenant_id,
        ...other,
      };
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
            className="text-primary-50 hover:text-primary-75 hover:underline"
            to={`/admin/user/${user.user_id}`}
          >
            {fullName}
          </Link>
        ) : (
          fullName
        )}
      </td>
      <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
      <td className="whitespace-nowrap px-6 py-4 text-center">
        <input
          checked={showLeaderboard}
          id="leaderboard"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600"
          disabled={!isAdminEnabled}
          {...(isAdminEnabled && {
            onChange: makeUserAction("TOGGLE_SHOW_LEADERBOARD", () =>
              setShowLeaderboard(!showLeaderboard),
            ),
          })}
        />
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-center">
        <input
          checked={dailyEmailEnabled}
          id="daily_email"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600"
          disabled={!isAdminEnabled}
          {...(isAdminEnabled && {
            onChange: makeUserAction("TOGGLE_SMS_ENABLED", () =>
              setDailyEmailEnabled(!dailyEmailEnabled),
            ),
          })}
        />
      </td>

      {isAdminEnabled ? (
        <td className="relative whitespace-nowrap px-6 py-4 text-center">
          {isLoading("CHANGE_LANGUAGE") && (
            <FontAwesomeIcon
              icon={faSpinner}
              spinPulse
              className="absolute bottom-0 left-0 right-0 top-0 m-auto"
            />
          )}
          <select
            value={getContentStackLanguage(user.language_preference)}
            className={twMerge(
              "rounded-sm border px-2 py-2",
              isLoading("CHANGE_LANGUAGE") && "text-transparent",
            )}
            disabled={isLoading("CHANGE_LANGUAGE")}
            onChange={({ target: { value } }) => {
              const languageSelection = getContentStackLanguage(value);
              makeUserAction(
                "CHANGE_LANGUAGE",
                () => setLanguage(languageSelection),
                { language: getContentStackLanguage(languageSelection) },
              )();
            }}
          >
            <FontAwesomeIcon icon={faSpinner} spinPulse />
            {supportedLngs.map((lng) => (
              <option key={lng} value={lng}>
                {lng}
              </option>
            ))}
          </select>
        </td>
      ) : (
        <td className="relative whitespace-nowrap px-6 py-4 text-center">
          {language}
        </td>
      )}

      {isAdminEnabled && (
        <td className="whitespace-nowrap px-6 py-4 text-center">
          <Button
            loading={isLoading("GENERATE_TOKEN_AND_SEND_SMS")}
            onClick={makeUserAction("GENERATE_TOKEN_AND_SEND_SMS")}
            className="h-8 w-auto py-0 "
          >
            <FontAwesomeIcon icon={faKey} />
          </Button>
        </td>
      )}

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

      {isAdminEnabled && (
        <>
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
        </>
      )}
    </tr>
  );
};
