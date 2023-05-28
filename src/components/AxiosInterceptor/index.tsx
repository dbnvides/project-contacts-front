import { useEffect } from "react";
import { api } from "../../services/api";
import axios from "axios";
import { toast } from "react-toastify";
import { IAxiosInterceptorProps } from "./interface";

export const AxiosInterceptor = ({ children }: IAxiosInterceptorProps) => {
    useEffect(() => {
        const errorInterceptor = (error: Error) => {
            if (!axios.isAxiosError(error)) {
                toast.error(error.message);
                return Promise.reject(error);
            }
        };

        const interceptor = api.interceptors.response.use(
            null,
            errorInterceptor
        );

        return () => api.interceptors.response.eject(interceptor);
    }, []);

    return <div>{children}</div>;
};
