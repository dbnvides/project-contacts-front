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

export const ModalEditContact = ({ toggleModel }: IModalProps) => {
    const { register, handleSubmit } = useForm<RegisterContactData>({
        resolver: zodResolver(contactSchema),
    });
    const [loading, setLoading] = useState(false);

    const editContact = async (data: RegisterContactData) => {
        setLoading(true);
        try {
            await api.post<RegisterContactData>(`/contact/`, data);
            toggleModel("contact");
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal toggleModal={toggleModel} type="contact">
            <SBoxModal>
                <h2>Cadastro</h2>
                <SButtonClose onClick={() => toggleModel("contact")}>
                    <GrFormClose />
                </SButtonClose>
                <form onSubmit={handleSubmit(editContact)}>
                    <input
                        type="text"
                        id="fullName"
                        {...register("fullName")}
                        placeholder="Digite o nome"
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
                        placeholder="Digite o email"
                    />

                    <SButton type="submit">Adicionar</SButton>
                </form>
            </SBoxModal>
        </Modal>
    );
};
