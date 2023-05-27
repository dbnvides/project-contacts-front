import { api } from "../../../services/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GrFormClose } from "react-icons/gr";
import { SButtonClose, SButton } from "../../../styles/Button";
import { useState } from "react";
import { Modal } from "../../../components/Modal";
import { SBoxModal } from "../../../components/Modal/styled";
import { UpdateData } from "./validator";
import { clientSchema } from "../../../components/ModalRegister/validator";
import { IModalProps } from "../../../components/Modal/validator";

export const ModalEditClient = ({ toggleModel }: IModalProps) => {
    const { register, handleSubmit } = useForm<UpdateData>({
        resolver: zodResolver(clientSchema),
    });
    const [loading, setLoading] = useState(false);

    const editContact = async (data: UpdateData) => {
        setLoading(true);
        try {
            await api.post<UpdateData>(`/client`, data);
            toggleModel("client");
        } catch (error) {
            console.error(error);
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
                    <input
                        type="password"
                        id="password"
                        {...register("password")}
                        placeholder="Digite sua senha"
                    />

                    <SButton type="submit">Salvar as alterações</SButton>
                </form>
            </SBoxModal>
        </Modal>
    );
};
