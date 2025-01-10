import styles from "./Header.module.scss";
import TableViewEyeSvg from '../../assets/icons/logo.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <TableViewEyeSvg />
            </div>
        </header>
    );
};

export default Header;
