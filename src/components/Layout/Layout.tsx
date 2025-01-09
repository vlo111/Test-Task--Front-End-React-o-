import Header from "../Header/Header";
import Content from "../Content/Content";
import Menu from "../Menu/Menu";
import styles from "./Layout.module.scss";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.content}>
                <Content />
            </main>
            <Menu />
        </div>
    );
};

export default Layout;
