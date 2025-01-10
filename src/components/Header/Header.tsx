import styles from "./Header.module.scss";
import TableViewEyeSvg from '../../assets/icons/logo.svg';
import SearchSvg from '../../assets/icons/search.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <TableViewEyeSvg />
            </div>
            <div className={styles.search}>
                <SearchSvg />
            </div>
        </header>
    );
};

export default Header;
