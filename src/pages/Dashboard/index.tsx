import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { IClientAllInfo } from "./dashboard.interface";
import { CardContact } from "../../components/CardContact";

export const Dashboard = () => {
    const [client, setClient] = useState<IClientAllInfo>();

    useEffect(() => {
        const getClient = async () => {
            const response = await api.get<IClientAllInfo>("client/info");

            setClient(response.data);
        };
        getClient();
    }, []);

    return (
        <>
            <header>
                {client && (
                    <CardContact
                        email={client?.email}
                        nome={client?.fullName}
                        tel={client?.telephone}
                        key={client.id}
                    />
                )}
            </header>
        </>
    );
};
