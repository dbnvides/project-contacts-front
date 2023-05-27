import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./providers/AuthProvider";
import { RoutesMain } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import { AxiosInterceptor } from "./components/AxiosInterceptor";

export const App = () => {
    return (
        <>
            <GlobalStyles />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                theme="light"
            />
            <AxiosInterceptor>
                <AuthProvider>
                    <RoutesMain />
                </AuthProvider>
            </AxiosInterceptor>
        </>
    );
};

export default App;
