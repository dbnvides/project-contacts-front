import { z } from "zod";

export const contactSchema = z.object({
    fullName: z.string().max(200),
    email: z.string().email({ message: "Invalid email address" }),
    telephone: z
        .string()
        .length(11, { message: "for example number 12912345678" }),
});

export type RegisterContactData = z.infer<typeof contactSchema>;

// const clientSchemaUpdate = contactSchema.omit({ id: true }).deepPartial();
