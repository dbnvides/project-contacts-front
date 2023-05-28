import { z } from "zod";

export const contactSchema = z.object({
    id: z.string(),
    fullName: z.string().max(200),
    email: z.string().email({ message: "Invalid email address" }),
    telephone: z
        .string()
        .max(11, { message: "for example number 12912345678" }),
});

export const contactSchemaRequest = contactSchema
    .omit({
        id: true,
    })
    .partial();

export type EditContactData = z.infer<typeof contactSchemaRequest>;
export type ContactData = z.infer<typeof contactSchema>;
// const clientSchemaUpdate = contactSchema.omit({ id: true }).deepPartial();
