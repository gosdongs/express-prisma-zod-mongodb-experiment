import { z } from "zod";

export const createUserSchema = z
  .object({
    name: z.string().min(1),
    email: z.string().email(),
    phoneNumber: z.string().regex(/^\d+$/),
    gender: z.enum(["male", "female", "others"]),
    age: z.number().min(1).optional(),
  })
  .strict();

export const updateUserSchema = createUserSchema.partial();
