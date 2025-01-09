import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>My Logo</div>
        </header>
    );
};

export default Header;
