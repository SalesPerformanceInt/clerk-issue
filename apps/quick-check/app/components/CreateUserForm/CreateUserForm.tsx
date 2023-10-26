import { useFetcher } from "@remix-run/react";

import { withZod } from "@remix-validated-form/with-zod";
import { DateTime } from "luxon";
import { ValidatedForm } from "remix-validated-form";
import { v4 as uuidv4 } from "uuid";

import { Button } from "quickcheck-shared";

import { createUserActionSchema } from "~/graphql/mutations";

import { parseSchema } from "~/utils/parseSchema";

import { FormInput, PhoneFormInput } from "~/components/FormInput";

const parseCreateUserRequest = (formData?: FormData) => {
  const data = formData && Object.fromEntries([...formData.entries()]);
  return parseSchema(data, createUserActionSchema);
};

export const CreateUserForm = () => {
  const fetcher = useFetcher();

  const isLoading = () => {
    if (fetcher.state === "idle") return false;
    return !!parseCreateUserRequest(fetcher.formData);
  };

  const validator = withZod(createUserActionSchema);

  return (
    <ValidatedForm
      resetAfterSubmit={true}
      validator={validator}
      className="overflow-x-auto sm:-mx-6 desktop:-mx-8"
      onSubmit={(data, event) => {
        event.preventDefault();
        fetcher.submit(
          {
            user_id: uuidv4(),
            account_subdomain: "richardson",
            user_email: data.email,
            user_first_name: data.firstName,
            user_last_name: data.lastName,
            start_date: DateTime.now().toISODate(),
            expiration_date: DateTime.now().plus({ weeks: 12 }).toISODate(),
            cms_topic_ids: ["blta787ff4eee54bb5e"],
          },
          {
            method: "POST",
            action: "/import/user",
            encType: "application/json",
          },
        );
      }}
    >
      <div className="inline-block min-w-full py-2 sm:px-6 desktop:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full table-auto text-left text-sm">
            <tbody>
              <tr className="bg-white">
                <td className="whitespace-nowrap px-6 py-4" colSpan={5}>
                  <h1 className="text-xl font-bold">Create User</h1>
                </td>
              </tr>
              <tr className="border-b bg-white">
                <td className="whitespace-nowrap px-6 py-4">
                  <FormInput name="firstName" label="First Name" />
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <FormInput name="lastName" label="Last Name" />
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <FormInput name="email" label="Email" />
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <PhoneFormInput name="phoneNumber" label="Telephone" />
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <Button
                    loading={isLoading()}
                    id="createUserSubmit"
                    type="submit"
                    className="mb-7 mt-5 h-12 border border-transparent"
                  >
                    Create User
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ValidatedForm>
  );
};
