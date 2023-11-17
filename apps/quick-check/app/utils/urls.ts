export const getOriginFromRequest = (request: Request) => new URL(request.url).origin;

export const getLoginUrl = (token: string, request: Request) => {
  const origin = getOriginFromRequest(request)
  return `${origin}/token/${token}`;
};
