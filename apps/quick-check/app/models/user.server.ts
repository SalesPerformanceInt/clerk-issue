import { apolloClient } from "~/graphql";

export async function getUserById(userId: string) {
  return await apolloClient.getUser(userId);
}
