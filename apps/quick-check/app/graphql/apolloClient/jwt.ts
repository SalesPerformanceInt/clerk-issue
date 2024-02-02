import { SignJWT } from "jose";

import { HASURA_JWT_OFFSET, HASURA_SECRET_KEY } from "~/utils/envs.server";

/**
 * Hasura JWT Helpers
 */

const secretKey = new TextEncoder().encode(HASURA_SECRET_KEY);

export const getJWTHeader = (jwt: string) => ({
  Authorization: `Bearer ${jwt}`,
});

export const getHasuraJWT = async (claims: Record<string, unknown>) =>
  new SignJWT({
    "https://hasura.io/jwt/claims": claims,
  })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt(HASURA_JWT_OFFSET && Number(HASURA_JWT_OFFSET))
    .setExpirationTime("2h")
    .sign(secretKey);
