import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { IClientAllInfo } from "./dashboard.interface";
import { NavBar } from "../../components/Navbar";
import { SContainer, SHeader, SMain } from "./styled";
import { CardClient } from "../../components/CardClient";
import { ListContacts } from "../../components/ListContacts";
import { CardContact } from "../../components/CardContact";
import { SButton } from "../../styles/Button";
import { FiUserPlus } from "react-icons/fi";
import { ModalRegisterContact } from "./ModalRegisterContact";
import { ModalEditContact } from "./ModalEditContact";
import { useNavigate } from "react-router-dom";
import { ModalEditClient } from "./ModalEditClient";

export const Dashboard = () => {
    const [client, setClient] = useState<IClientAllInfo>();
    const [contactModal, setContactModal] = useState(false);
    const [clientModal, setClientModal] = useState(false);
    const navigate = useNavigate();

    const contacts = client?.contacts;

    useEffect(() => {
        const getClient = async () => {
            const response = await api.get<IClientAllInfo>("client/info");
            if (!response) {
                return navigate("/");
            }
            setClient(response.data);
        };
        getClient();
    }, []);

    const toggleModal = (type: string) => {
        if (type == "client") {
            setClientModal(!clientModal);
        }
        if (type == "contact") {
            setContactModal(!contactModal);
        }
    };

    return (
        <>
            {contactModal && (
                <ModalEditContact toggleModel={() => toggleModal("contact")} />
            )}
            {clientModal && (
                <ModalEditClient toggleModel={() => toggleModal("client")} />
            )}
            <NavBar />
            <SHeader>
                <SContainer>
                    <h2>Minhas informações</h2>
                    {client && (
                        <CardClient
                            setClientModal={() => toggleModal("client")}
                            email={client?.email}
                            nome={client?.fullName}
                            tel={client?.telephone}
                            key={client.id}
                        />
                    )}
                </SContainer>
            </SHeader>

            <SMain>
                <SContainer>
                    <div className="boxPlusContact">
                        <h2>Contatos</h2>
                        <SButton onClick={() => setContactModal(true)}>
                            <span>
                                <FiUserPlus />
                            </span>
                            Adicionar
                        </SButton>
                    </div>
                    <ListContacts>
                        {contacts?.map((contact) => (
                            <CardContact
                                id={contact.id}
                                nome={contact.fullName}
                                email={contact.email}
                                tel={contact.telephone}
                                key={contact.id}
                            />
                        ))}
                    </ListContacts>
                </SContainer>
            </SMain>
        </>
    );
};
