import { BsPersonCircle } from "react-icons/bs";
import { SCardClient } from "./styled";
import { SButton } from "../../styles/Button";
import { useAuth } from "../../hooks/useAuth";
import { Props } from "./client.interface";

export const CardClient = ({ nome, email, tel, id, toggleModal }: Props) => {
    const { clientLogout } = useAuth();

    return (
        <SCardClient key={id}>
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
                <SButton onClick={() => toggleModal("client")}>Editar</SButton>
                <SButton onClick={() => clientLogout()}>Logout</SButton>
            </div>
        </SCardClient>
    );
};
