import { SearchProvider } from "./context/SearchContext";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Menu from "./components/Menu/Menu";
import "./assets/styles/globals.scss";

const App = () => {
    return (
        <SearchProvider>
            <div className="layout">
                <Header />
                <Menu />
                <div className="container">
                    <Content />
                </div>
            </div>
        </SearchProvider>
    );
};

export default App;
