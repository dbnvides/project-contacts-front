import { api } from "../../../services/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GrFormClose } from "react-icons/gr";
import { SButtonClose, SButton } from "../../../styles/Button";
import { useState } from "react";
import { Modal } from "../../../components/Modal";
import { SBoxModal } from "../../../components/Modal/styled";
import { IModalProps } from "../../../components/Modal/validator";
import { EditContactData, contactSchemaRequest } from "./validator";
import { useClient } from "../../../hooks/useClient";
import { toast } from "react-toastify";

export const ModalEditContact = ({ toggleModel }: IModalProps) => {
    const { contact } = useClient();
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit } = useForm<EditContactData>({
        defaultValues: {
            email: contact?.email,
            fullName: contact?.fullName,
            telephone: contact?.telephone,
        },

        resolver: zodResolver(contactSchemaRequest),
    });

    const editContact = async (data: EditContactData) => {
        setLoading(true);
        if (data.email === contact?.email) {
            data = {
                fullName: data.fullName,
                telephone: data.telephone,
            };
        }

        try {
            await api.patch<EditContactData>(`/contact/${contact?.id}`, data);
            toggleModel("contact");
            toast.success("Atualizado com sucesso!");
        } catch (error) {
            console.error(error);
            toast.error("Erro ao atualizar!");
        } finally {
            setLoading(false);
        }
    };

    const deleteContact = async () => {
        setLoading(true);
        try {
            await api.delete(`/contact/${contact?.id}`);
            toggleModel("contact");
            toast.success("Deletado com sucesso!");
        } catch (error) {
            console.error(error);
            toast.error("Erro ao deletar!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal toggleModal={toggleModel} type="contact">
            <SBoxModal>
                <h2>Editar contato</h2>
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

                    <SButton type="submit">Salvar alterações</SButton>
                </form>
                <SButton
                    className="buttonDelete"
                    type="button"
                    onClick={() => deleteContact()}
                >
                    Deletar
                </SButton>
            </SBoxModal>
        </Modal>
    );
};
