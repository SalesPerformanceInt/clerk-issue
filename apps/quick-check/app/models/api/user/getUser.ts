import { z } from "zod";

export const getUserSchema = z.object({
  userId: z.string().uuid(),
});

export type GetUserData = z.infer<typeof getUserSchema>;
