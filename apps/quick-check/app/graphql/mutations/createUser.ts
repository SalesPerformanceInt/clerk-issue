import { parsePhoneNumber } from "libphonenumber-js";
import { z } from "zod";

import { graphql, type GQLProxyData, type WithApolloClient } from "~/graphql";

import { generateNewToken } from "./generateNewToken";

export const CREATE_USER = graphql(/* GraphQL */ `
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phoneNumber: String!
  ) {
    insert_user_one(
      object: {
        first_name: $firstName
        last_name: $lastName
        email: $email
        phone_number: $phoneNumber
      }
    ) {
      ...BaseUser
    }
  }
`);

export const createUserActionSchema = z.object({
  firstName: z.string().min(1, { message: "Required" }),
  lastName: z.string().min(1, { message: "Required" }),
  email: z.string().email(),
  phoneNumber: z.string().min(17, { message: "Invalid phone number" }),
});

export type UserInput = z.infer<typeof createUserActionSchema>;

export async function createUser(
  this: WithApolloClient,
  user: UserInput,
  proxyData: GQLProxyData,
) {
  const { now } = proxyData;

  try {
    const { data } = await this.client.mutate({
      mutation: CREATE_USER,
      variables: {
        ...user,
        phoneNumber: parsePhoneNumber(
          user.phoneNumber,
          "US",
        ).formatInternational(),
      },
    });

    const userId = data?.insert_user_one?.user_id;

    if (userId) await generateNewToken.call(this, { userId, now });

    return data?.insert_user_one ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
