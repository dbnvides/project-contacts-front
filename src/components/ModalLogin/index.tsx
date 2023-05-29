import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { useAuth } from "../../hooks/useAuth";
import { SButton, SButtonClose } from "../../styles/Button";
import { GrFormClose } from "react-icons/gr";
import { Modal } from "../Modal";
import { SBoxModal } from "../Modal/styled";
import { IModalProps } from "../Modal/validator";

export const ModalLogin = ({ toggleModel }: IModalProps) => {
    const { signIn } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginData>({
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
                    <SButton type="submit">Entrar</SButton>
                </form>
            </SBoxModal>
        </Modal>
    );
};
