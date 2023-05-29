import { z } from "zod";

export const clientSchema = z.object({
    fullName: z.string().min(2, "O nome é obrigatório.").max(200),
    password: z
        .string()
        .min(6, "A senha é obrigatória e precisa de no mínimo 6 caracteres")
        .max(20)
        .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
    email: z.string().email("Email inválido"),
    telephone: z
        .string()
        .length(11, "Numero com 11 digitos exemplo: 12912345678"),
});

export type RegisterData = z.infer<typeof clientSchema>;
