import { useFetcher, useParams } from "@remix-run/react";

import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm } from "remix-validated-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

import { Button, invariant } from "quickcheck-shared";

import { parseCreateUserRequest } from "~/models/api";

import { FormInput } from "~/components/FormInput";

export const createUserActionSchema = z.object({
  firstName: z.string().min(1, { message: "Required" }),
  lastName: z.string().min(1, { message: "Required" }),
  email: z.string().email(),
});

export const CreateUserForm = () => {
  const fetcher = useFetcher();
  const { tenantId } = useParams();
  invariant(tenantId, "No Tenant ID found");

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
            account_subdomain: tenantId,
            email: data.email,
            first_name: data.firstName,
            last_name: data.lastName,
          },
          {
            method: "POST",
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
