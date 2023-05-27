import { api } from "../../services/api";
import { RegisterData, clientSchema } from "./validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GrFormClose } from "react-icons/gr";
import { SButtonClose, SButton } from "../../styles/Button";
import { useState } from "react";
import { IModalProps } from "../ModalLogin/validator";
import { Modal } from "../Modal";
import { SBoxModal } from "../Modal/styled";

export const ModalRegister = ({ toggleModel }: IModalProps) => {
    const { register, handleSubmit } = useForm<RegisterData>({
        resolver: zodResolver(clientSchema),
    });
    const [loading, setLoading] = useState(false);

    const signUp = async (data: RegisterData) => {
        setLoading(true);
        try {
            await api.post<RegisterData>("/client", data);
            toggleModel("register");
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal toggleModal={toggleModel} type="register">
            <SBoxModal>
                <h2>Cadastro</h2>
                <SButtonClose onClick={() => toggleModel("register")}>
                    <GrFormClose />
                </SButtonClose>
                <form onSubmit={handleSubmit(signUp)}>
                    <input
                        type="text"
                        id="fullName"
                        {...register("fullName")}
                        placeholder="Digite seu nome completo"
                    />
                    <input
                        type="number"
                        id="telephone"
                        {...register("telephone")}
                        placeholder="Digite o numero do celular"
                    />
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

                    <SButton type="submit">Cadastrar</SButton>
                </form>
            </SBoxModal>
        </Modal>
    );
};
