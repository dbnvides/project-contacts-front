import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IModalProps, LoginData, schema } from "./validator";
import { useAuth } from "../../hooks/useAuth";

import { SButton, SButtonClose } from "../../styles/Button";
import { GrFormClose } from "react-icons/gr";
import { Modal } from "../Modal";
import { SBoxModal } from "../Modal/styled";

export const ModalLogin = ({ toggleModel }: IModalProps) => {
    const { signIn } = useAuth();
    const { register, handleSubmit } = useForm<LoginData>({
        resolver: zodResolver(schema),
    });

    return (
        <Modal toggleModal={toggleModel} type="login">
            <SBoxModal>
                <h2>Login</h2>
                <SButtonClose onClick={() => toggleModel("login")}>
                    <GrFormClose />
                </SButtonClose>
                <form onSubmit={handleSubmit(signIn)}>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        placeholder="Digite seu email"
                    />

                    <input
                        type="password"
                        id="password"
                        {...register("password")}
                        placeholder="Digite sua senha"
                    />

                    <SButton type="submit">Entrar</SButton>
                </form>
            </SBoxModal>
        </Modal>
    );
};
