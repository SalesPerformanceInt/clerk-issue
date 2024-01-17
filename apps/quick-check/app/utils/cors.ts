import { json } from "@remix-run/node";

import { cors } from "remix-utils/cors";

import { ALLOWED_ORIGIN_REGEX } from "./envs.server";

type CORSOptions = Parameters<typeof cors>[2];

export const corsResponse = async <Data>(
  request: Request,
  data: Data,
  init?: number | ResponseInit,
  corsOptions?: CORSOptions,
) => {
  const response = json(data, init);
  return cors(request, response, {
    origin: new RegExp(ALLOWED_ORIGIN_REGEX),
    ...corsOptions,
  });
};
