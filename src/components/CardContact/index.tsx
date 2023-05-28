import { SCardContact } from "./styled";
import { BsPersonCircle } from "react-icons/bs";

interface Props {
    nome: string;
    email: string;
    tel: string;
    id: string;
    editContact: () => void;
}
export const CardContact = ({ nome, email, tel, id, editContact }: Props) => {
    return (
        <SCardContact key={id} onClick={() => editContact()}>
            <div className="profile">
                <BsPersonCircle />
            </div>
            <div className="contentProfile">
                <span>
                    <b>Nome: </b>
                    {nome}
                </span>
                <span>
                    <b>Email: </b>
                    {email}
                </span>
                <span>
                    <b>Telefone: </b>
                    {tel}
                </span>
            </div>
        </SCardContact>
    );
};
