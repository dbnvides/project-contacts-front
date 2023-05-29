import { api } from "../../../services/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GrFormClose } from "react-icons/gr";
import { SButtonClose, SButton } from "../../../styles/Button";
import { useState } from "react";
import { Modal } from "../../../components/Modal";
import { SBoxModal } from "../../../components/Modal/styled";
import { IModalProps } from "../../../components/Modal/validator";
import { RegisterContactData, contactSchema } from "./validator";
import { toast } from "react-toastify";

export const ModalRegisterContact = ({ toggleModel }: IModalProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterContactData>({
        resolver: zodResolver(contactSchema),
    });
    const [loading, setLoading] = useState(false);

    const addNewContact = async (data: RegisterContactData) => {
        setLoading(true);
        try {
            await api.post<RegisterContactData>("/contact/new", data);
            toggleModel("contactAdd");
            toast.success("Contato adicionado");
        } catch (error) {
            console.error(error);
            toast.error("Contato não cadastrado");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal toggleModal={toggleModel} type="contactAdd">
            <SBoxModal>
                <h2>Cadastro</h2>
                <SButtonClose onClick={() => toggleModel("contactAdd")}>
                    <GrFormClose />
                </SButtonClose>
                <form onSubmit={handleSubmit(addNewContact)}>
                    <fieldset>
                        <input
                            type="text"
                            id="fullName"
                            {...register("fullName")}
                            placeholder="Digite o nome"
                        />
                        {errors.fullName ? (
                            <p className="showError">
                                {errors.fullName.message}
                            </p>
                        ) : null}
                    </fieldset>
                    <fieldset>
                        <input
                            type="number"
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
                            placeholder="Digite o email"
                        />
                        {errors.email ? (
                            <p className="showError">{errors.email.message}</p>
                        ) : null}
                    </fieldset>
                    <SButton type="submit">Adicionar</SButton>
                </form>
            </SBoxModal>
        </Modal>
    );
};
