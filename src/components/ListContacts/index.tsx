import { ReactNode, useState } from "react";
import { CardContact } from "../CardContact";
import { SListContacts } from "./styled";
import { useAuth } from "../../hooks/useAuth";

interface IPropsList {
    children: ReactNode;
}

export const ListContacts = ({ children }: IPropsList) => {
    const { logIn } = useAuth();
    const [listDefault, setListDefault] = useState([
        {
            nome: "João",
            email: "joao@example.com",
            telefone: "123456789",
        },
        {
            nome: "Maria",
            email: "maria@example.com",
            telefone: "987654321",
        },
        {
            nome: "Carlos",
            email: "carlos@example.com",
            telefone: "456789123",
        },
        {
            nome: "Ana",
            email: "ana@example.com",
            telefone: "321654987",
        },
    ]);

    //Caso de tempo de fazer home mais enfeitada deixar o map
    return (
        <SListContacts>
            {logIn
                ? children
                : listDefault.map((contact, index) => (
                      <CardContact
                          id={index.toString()}
                          nome={contact.nome}
                          email={contact.email}
                          tel={contact.telefone}
                          key={index}
                      />
                  ))}
        </SListContacts>
    );
};
