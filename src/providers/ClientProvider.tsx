import { createContext, useEffect, useState } from "react";
import { IClientContextValues, IProviderProps } from "./context.interface";
import { LoginData } from "../components/ModalLogin/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    IClientAllInfo,
    IContact,
} from "../pages/Dashboard/dashboard.interface";
import { useAuth } from "../hooks/useAuth";

export const ClientContext = createContext<IClientContextValues>(
    {} as IClientContextValues
);

export const ClientProvider = ({ children }: IProviderProps) => {
    const [loading, setLoading] = useState(true);
    const [client, setClient] = useState<IClientAllInfo>();
    const [contact, setContact] = useState<IContact>();
    const [contactModal, setContactModal] = useState(false);
    const [contactAddModal, setContactAddModal] = useState(false);
    const [clientModal, setClientModal] = useState(false);
    const navigate = useNavigate();

    const { logIn } = useAuth();

    useEffect(() => {
        setLoading(true);
        try {
            const getClient = async () => {
                const response = await api.get<IClientAllInfo>("client/info");
                if (!response) {
                    return navigate("/");
                }
                setClient(response.data);
            };
            if (logIn) {
                getClient();
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, [logIn, clientModal]);

    const toggleModal = (type: string) => {
        if (type == "client") {
            setClientModal(!clientModal);
        }
        if (type == "contact") {
            setContactModal(!contactModal);
        }
        if (type == "contactAdd") {
            setContactAddModal(!contactAddModal);
        }
    };

    return (
        <ClientContext.Provider
            value={{
                loading,
                client,
                clientModal,
                contactModal,
                contactAddModal,
                toggleModal,
                contact,
                setContact,
            }}
        >
            {children}
        </ClientContext.Provider>
    );
};
