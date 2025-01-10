import React, {ReactNode} from "react";
import Header from "../Header/Header";
import HorizontalMenu from "../Menu/HorizontalMenu";
import styles from "./Layout.module.scss";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <HorizontalMenu />
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default Layout;
