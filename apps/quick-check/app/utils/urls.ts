import { APP_DOMAIN } from "~/utils/envs.server"

export const getOriginFromRequest = (request: Request) => new URL(request.url).origin

export const getLoginUrl = (token: string, request: Request) => {
  const origin = APP_DOMAIN ?? getOriginFromRequest(request)
  return `${origin}/token/${token}`
}
