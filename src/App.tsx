import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

export const App = () => {
    return (
        <>
            <GlobalStyles />
            <Home />
            <Dashboard />
        </>
    );
};

export default App;
