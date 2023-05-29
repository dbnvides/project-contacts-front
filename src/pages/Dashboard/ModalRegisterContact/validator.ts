import { z } from "zod";

export const contactSchema = z.object({
    fullName: z.string().min(2, "O nome é obrigatório.").max(200),
    email: z.string().email("Email inválido"),
    telephone: z
        .string()
        .length(11, "Numero com 11 digitos exemplo: 12912345678"),
});

export type RegisterContactData = z.infer<typeof contactSchema>;
