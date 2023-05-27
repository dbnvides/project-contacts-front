import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedHomeRoute = () => {
    const { loading, logIn } = useAuth();

    //criar pagina de loading
    if (loading) {
        return null;
    }
    return logIn ? <Navigate to="/dashboard" /> : <Outlet />;
};
