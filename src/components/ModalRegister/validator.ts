import { z } from "zod";

export const clientSchema = z.object({
    fullName: z.string().max(200),
    password: z.string().min(6).max(20),
    email: z.string().email({ message: "Invalid email address" }),
    telephone: z
        .string()
        .length(11, { message: "for example number 12912345678" }),
});

export type RegisterData = z.infer<typeof clientSchema>;
