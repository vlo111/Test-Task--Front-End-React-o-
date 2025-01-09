import HorizontalMenu from "./HorizontalMenu";
import MobileMenu from "./MobileMenu";
import styles from "./Menu.module.scss";

const Menu = () => (
    <div className={styles.menu}>
        <HorizontalMenu />
        <MobileMenu />
    </div>
);

export default Menu;
