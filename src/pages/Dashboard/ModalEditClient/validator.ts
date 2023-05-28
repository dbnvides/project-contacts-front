import { z } from "zod";

export const clientSchema = z
    .object({
        fullName: z.string().max(200),
        password: z.string().min(6).max(20),
        email: z.string().email({ message: "Invalid email address" }),
        telephone: z
            .string()
            .length(11, { message: "for example number 12912345678" }),
    })
    .partial();

export const clientSchemaUpdate = clientSchema
    .omit({ password: true })
    .deepPartial();

export type UpdateData = z.infer<typeof clientSchemaUpdate>;

export interface IModalClientProps {
    toggleModel: (type: string) => void;
    id: string;
}
