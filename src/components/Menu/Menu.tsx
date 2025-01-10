import HorizontalMenu from "./HorizontalMenu";
import MobileMenu from "./MobileMenu";
import styles from "./Menu.module.scss";

const Menu = () => (
    <>
        <div className={styles.horizontalLines}>
            <HorizontalMenu />
        </div>
        <MobileMenu />
    </>
);

export default Menu;
