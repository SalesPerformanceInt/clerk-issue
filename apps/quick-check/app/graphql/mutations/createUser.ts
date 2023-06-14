import { parsePhoneNumber } from "libphonenumber-js";
import { z } from "zod";
import { graphql, type GraphQLClient } from "~/graphql";

import { QUESTION_IDS, generateNewToken } from "~/models/user";

export const CREATE_USER = graphql(/* GraphQL */ `
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phoneNumber: String!
    $nextQuestionId: String
  ) {
    insert_user_one(
      object: {
        first_name: $firstName
        last_name: $lastName
        email: $email
        phone_number: $phoneNumber
        next_question_id: $nextQuestionId
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

export async function createUser(this: GraphQLClient, user: UserInput) {
  try {
    const { data } = await this.client.mutate({
      mutation: CREATE_USER,
      variables: {
        ...user,
        phoneNumber: parsePhoneNumber(
          user.phoneNumber,
          "US",
        ).formatInternational(),
        nextQuestionId: QUESTION_IDS[0],
      },
    });

    const userId = data?.insert_user_one?.user_id;

    if (userId) await generateNewToken(userId);

    return data?.insert_user_one ?? null;
  } catch (error) {
    console.log("ERROR", error);
    return null;
  }
}
