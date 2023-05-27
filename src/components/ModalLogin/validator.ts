import { z } from "zod";

export const schema = z.object({
    email: z.string().email("Precisa ser no formato de email."),
    password: z.string().nonempty("Senha obrigatória."),
});

export type LoginData = z.infer<typeof schema>;

export interface IModalProps {
    toggleModel: (type: string) => void;
}
