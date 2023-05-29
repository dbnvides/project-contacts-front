import { api } from "../../../services/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GrFormClose } from "react-icons/gr";
import { SButtonClose, SButton } from "../../../styles/Button";
import { useState } from "react";
import { Modal } from "../../../components/Modal";
import { SBoxModal } from "../../../components/Modal/styled";
import { UpdateData, clientSchemaUpdate } from "./validator";
import { IModalProps } from "../../../components/Modal/validator";
import { useClient } from "../../../hooks/useClient";
import { toast } from "react-toastify";

export const ModalEditClient = ({ toggleModel }: IModalProps) => {
    const [loading, setLoading] = useState(false);
    const { client } = useClient();

    const { register, handleSubmit } = useForm<UpdateData>({
        defaultValues: {
            email: client?.email,
            fullName: client?.fullName,
            telephone: client?.telephone,
        },
        resolver: zodResolver(clientSchemaUpdate),
    });

    const editClient = async (data: UpdateData) => {
        setLoading(true);
        if (data.email === client?.email) {
            data = {
                fullName: data.fullName,
                telephone: data.telephone,
            };
        }
        try {
            const resp = await api.patch<UpdateData>(`/client`, data);
            if (resp) {
                toggleModel("client");
                toast.success("Atualizado com sucesso!");
            } else {
                toast.error("Erro ao atualizar!");
            }
        } catch (error) {
            toast.error("Erro ao atualizar!");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const deleteClient = async () => {
        setLoading(true);
        try {
            await api.delete(`/client`);
            toggleModel("client");
            toast.success("Conta apagada com sucesso!");
        } catch (error) {
            console.error(error);
            toast.error("Erro ao deletar!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal toggleModal={toggleModel} type="client">
            <SBoxModal>
                <h2>Editar</h2>
                <SButtonClose onClick={() => toggleModel("client")}>
                    <GrFormClose />
                </SButtonClose>
                <form onSubmit={handleSubmit(editClient)}>
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

                    <SButton type="submit">Salvar as alterações</SButton>
                </form>
                <SButton
                    className="buttonDelete"
                    type="button"
                    onClick={() => deleteClient()}
                >
                    Deletar
                </SButton>
            </SBoxModal>
        </Modal>
    );
};
