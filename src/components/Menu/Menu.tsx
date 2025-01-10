import HorizontalMenu from "./Horizontal/HorizontalMenu.tsx";
import MobileMenu from "./Mobile/MobileMenu.tsx";
import styles from "./Horizontal/HorizontalMenu.module.scss";

const Menu = () => (
    <>
        <div className={styles.horizontalLines}>
            <HorizontalMenu />
        </div>
        <MobileMenu />
    </>
);

export default Menu;
