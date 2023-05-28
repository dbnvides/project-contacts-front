import { createContext, useEffect, useState } from "react";
import { IAuthContextValues, IProviderProps } from "./context.interface";
import { LoginData } from "../components/ModalLogin/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContactData } from "../pages/Dashboard/ModalEditContact/validator";

export const AuthContext = createContext<IAuthContextValues>(
    {} as IAuthContextValues
);

export const AuthProvider = ({ children }: IProviderProps) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [logIn, setLogIn] = useState(false);

    const clientLogout = () => {
        localStorage.clear();
        toast.info("Usuário deslogado!");
        setLogIn(false);
        navigate("/");
    };

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
        setLoading(true);
        try {
            const response = await api.post("/login", data);

            const { token } = response.data;

            api.defaults.headers.common.Authorization = `Bearer ${token}`;
            localStorage.setItem("client@project:token", token);

            setLogIn(true);
            navigate("/dashboard");
            toast.success("Login realizado com sucesso!");
        } catch (error) {
            toast.error("Email ou senha incorreta.");

            console.log(error);
            setLogIn(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ signIn, loading, logIn, clientLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
