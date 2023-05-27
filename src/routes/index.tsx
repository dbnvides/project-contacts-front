import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Dashboard } from "../pages/Dashboard";
import { ProtectedHomeRoute } from "./ProtectedHomeRoute";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route element={<ProtectedHomeRoute />}>
                <Route path="/" element={<Home />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );
};
