import { NavBar } from "../../components/Navbar";
import { SContainer, SHeader, SMain } from "./styled";
import { CardClient } from "../../components/CardClient";
import { ListContacts } from "../../components/ListContacts";
import { CardContact } from "../../components/CardContact";
import { SButton } from "../../styles/Button";
import { FiUserPlus } from "react-icons/fi";
import { ModalEditContact } from "./ModalEditContact";
import { ModalEditClient } from "./ModalEditClient";
import { useClient } from "../../hooks/useClient";
import { ModalRegisterContact } from "./ModalRegisterContact";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContactData } from "./ModalEditContact/validator";

export const Dashboard = () => {
    const {
        client,
        contactModal,
        clientModal,
        toggleModal,
        contactAddModal,
        setContact,
    } = useClient();
    const [contacts, setContacts] = useState<ContactData[]>([]);

    const editContact = (data: ContactData) => {
        setContact(data);
        toggleModal("contact");
    };

    useEffect(() => {
        try {
            const getContacts = async () => {
                const response = await api.get("client/contacts");

                setContacts(response.data);
            };
            getContacts();
        } catch (error) {
            console.log(error);
        }
    }, [toggleModal]);

    return (
        <>
            {contactModal && (
                <ModalEditContact toggleModel={() => toggleModal("contact")} />
            )}
            {clientModal && (
                <ModalEditClient toggleModel={() => toggleModal("client")} />
            )}
            {contactAddModal && (
                <ModalRegisterContact
                    toggleModel={() => toggleModal("contactAdd")}
                />
            )}

            <NavBar />
            <SHeader>
                <SContainer>
                    <h2>Minhas informações</h2>
                    {client && (
                        <CardClient
                            toggleModal={() => toggleModal("client")}
                            email={client?.email}
                            nome={client?.fullName}
                            tel={client?.telephone}
                            key={client.id}
                            id={client.id}
                        />
                    )}
                </SContainer>
            </SHeader>

            <SMain>
                <SContainer>
                    <div className="boxPlusContact">
                        <h2>Contatos</h2>
                        <SButton onClick={() => toggleModal("contactAdd")}>
                            <span>
                                <FiUserPlus />
                            </span>
                            Adicionar
                        </SButton>
                    </div>
                    <ListContacts>
                        {contacts?.map((contact) => (
                            <CardContact
                                editContact={() => editContact(contact)}
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
