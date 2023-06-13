import { isString } from "remeda";
import { type z } from "zod";

export const parseSchema = <T>(value: unknown, schema: z.ZodType<T>) => {
  try {
    if (isString(value)) {
      return schema.parse(JSON.parse(value));
    } else {
      return schema.parse(value);
    }
  } catch {}
  return null;
};
