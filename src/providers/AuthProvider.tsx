import { createContext, useEffect, useState } from "react";
import {
    IAuthContextValues,
    IAuthProviderProps,
} from "./authContext.interface";
import { LoginData } from "../components/ModalLogin/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext<IAuthContextValues>(
    {} as IAuthContextValues
);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [logIn, setLogIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("client@project:token");
        setLoading(true);

        if (!token) {
            setLoading(false);
            setLogIn(false);
            return navigate("/");
        }

        setLogIn(true);

        api.defaults.headers.common.authorization = `Bearer ${token}`;
        setLoading(false);
    }, []);

    const signIn = async (data: LoginData) => {
        try {
            const response = await api.post("/login", data);
            const { token } = response.data;

            api.defaults.headers.common.Authorization = `Bearer ${token}`;
            localStorage.setItem("client@project:token", token);

            setLogIn(true);
        } catch (error) {
            setLogIn(false);
            console.error(error);
        }
    };

    return (
        <AuthContext.Provider value={{ signIn, loading, logIn }}>
            {children}
        </AuthContext.Provider>
    );
};
