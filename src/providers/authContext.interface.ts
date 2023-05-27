import { ReactNode } from "react";
import { LoginData } from "../components/ModalLogin/validator";

export interface IAuthProviderProps {
    children: ReactNode;
}

export interface IAuthContextValues {
    signIn: (data: LoginData) => void;
    loading: boolean;
    logIn: boolean;
    clientLogout: () => void;
}
