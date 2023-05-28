import { ReactNode } from "react";
import { LoginData } from "../components/ModalLogin/validator";
import {
    IClientAllInfo,
    IContact,
} from "../pages/Dashboard/dashboard.interface";

export interface IProviderProps {
    children: ReactNode;
}

export interface IAuthContextValues {
    signIn: (data: LoginData) => void;
    loading: boolean;
    logIn: boolean;
    clientLogout: () => void;
}

export interface IClientContextValues {
    loading: boolean;
    client: IClientAllInfo | undefined;
    contactModal: boolean;
    clientModal: boolean;
    contactAddModal: boolean;
    setContact: React.Dispatch<React.SetStateAction<IContact | undefined>>;
    contact: IContact | undefined;
    toggleModal: (type: string) => void;
}
