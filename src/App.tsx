import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Menu from "./components/Menu/Menu";
import "./assets/styles/globals.scss";

const App = () => {
    return (
        <div className="layout">
            <Header />
            <Menu />
            <div className="container">
                <Content />
            </div>
        </div>
    );
};

export default App;
