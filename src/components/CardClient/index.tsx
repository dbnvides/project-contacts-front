import { BsPersonCircle } from "react-icons/bs";
import { SCardClient } from "./styled";
import { SButton } from "../../styles/Button";
import { useAuth } from "../../hooks/useAuth";

interface Props {
    nome: string;
    email: string;
    tel: string;
    setClientModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CardClient = ({ nome, email, tel, setClientModal }: Props) => {
    const { clientLogout } = useAuth();

    return (
        <SCardClient>
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
            <div className="boxButtons">
                <SButton onClick={() => setClientModal(true)}>Editar</SButton>
                <SButton onClick={() => clientLogout()}>Logout</SButton>
            </div>
        </SCardClient>
    );
};
