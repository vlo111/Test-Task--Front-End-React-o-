import { useState } from "react";
import styles from "./MobileMenu.module.scss";
import {MENU_ITEMS, SUBMENU_ITEMS} from "../../constants/menuConstants.ts";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <>
            {/* Hamburger Button */}
            <div className={styles.hamburger} onClick={toggleMenu}>
                ☰
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
                {/* Close Button Section */}
                <div className={styles.closeContainer}>
                    <div className={styles.close} onClick={toggleMenu}>
                        ×
                    </div>
                </div>

                {/* Menu Items */}
                <ul className={styles.menuItems}>
                    {MENU_ITEMS.map((item) => (
                        <li key={item.label} className={styles.menuItem}>
                            <a href={item.link}>{item.label}</a>
                            {item.label === 'Services' && (
                                <ul className={styles.submenu}>
                                    {SUBMENU_ITEMS.map((submenu) => (
                                        <li key={submenu.label} className={styles.submenuItem}>
                                            <a href={submenu.link}>{submenu.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default MobileMenu;
