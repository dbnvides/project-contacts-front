import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./providers/AuthProvider";
import { RoutesMain } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import { AxiosInterceptor } from "./components/AxiosInterceptor";
import { ClientProvider } from "./providers/ClientProvider";

export const App = () => {
    return (
        <>
            <GlobalStyles />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                theme="light"
            />
            <AxiosInterceptor>
                <AuthProvider>
                    <ClientProvider>
                        <RoutesMain />
                    </ClientProvider>
                </AuthProvider>
            </AxiosInterceptor>
        </>
    );
};

export default App;
