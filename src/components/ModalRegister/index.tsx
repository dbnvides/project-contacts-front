import { api } from "../../services/api";
import { RegisterData, clientSchema } from "./validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GrFormClose } from "react-icons/gr";
import { SButtonClose, SButton } from "../../styles/Button";
import { useState } from "react";
import { Modal } from "../Modal";
import { SBoxModal } from "../Modal/styled";
import { IModalProps } from "../Modal/validator";
import { toast } from "react-toastify";

export const ModalRegister = ({ toggleModel }: IModalProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterData>({
        resolver: zodResolver(clientSchema),
    });
    const [loading, setLoading] = useState(false);

    const signUp = async (data: RegisterData) => {
        setLoading(true);
        try {
            await api.post<RegisterData>("/client", data);
            toggleModel("register");
            toast.success("Cadastro realizado com sucesso!");
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
                    <fieldset>
                        <input
                            type="text"
                            id="fullName"
                            {...register("fullName")}
                            placeholder="Digite seu nome completo"
                        />
                        {errors.fullName ? (
                            <p className="showError">
                                {errors.fullName.message}
                            </p>
                        ) : null}
                    </fieldset>
                    <fieldset>
                        <input
                            type="text"
                            id="telephone"
                            {...register("telephone")}
                            placeholder="Digite o numero do celular"
                        />
                        {errors.telephone ? (
                            <p className="showError">
                                {errors.telephone.message}
                            </p>
                        ) : null}
                    </fieldset>
                    <fieldset>
                        <input
                            type="email"
                            id="email"
                            {...register("email")}
                            placeholder="Digite seu email"
                        />
                        {errors.email ? (
                            <p className="showError">{errors.email.message}</p>
                        ) : null}
                    </fieldset>
                    <fieldset>
                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                            placeholder="Digite sua senha"
                        />
                        {errors.password ? (
                            <p className="showError">
                                {errors.password.message}
                            </p>
                        ) : null}
                    </fieldset>
                    <SButton type="submit">Cadastrar</SButton>
                </form>
            </SBoxModal>
        </Modal>
    );
};
