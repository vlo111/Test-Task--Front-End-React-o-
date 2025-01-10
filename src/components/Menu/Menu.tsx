import HorizontalMenu from "./HorizontalMenu";
import MobileMenu from "./MobileMenu";
import styles from "./Menu.module.scss";

const Menu = () => (
    <div>
        <div className={styles.horizontalLines}>
            <HorizontalMenu />
        </div>
        <MobileMenu />
    </div>
);

export default Menu;
