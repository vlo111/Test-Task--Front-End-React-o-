import { useState } from "react";
import styles from "./MobileMenu.module.scss";
import {MENU_ITEMS, SUBMENU_ITEMS} from "../../../constants/menuConstants.ts";
import DownSvg from "../../../assets/icons/down.svg";
import LogoSvg from "../../../assets/icons/logo.svg";
import MenuSvg from "../../../assets/icons/menu.svg";
import CloseSvg from "../../../assets/icons/close.svg";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <MenuSvg />
            </div>

            <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
                <div className={styles.closeContainer}>
                    <LogoSvg />
                    <div className={styles.close} onClick={toggleMenu}>
                        <CloseSvg />
                    </div>
                </div>

                <ul className={styles.menuItems}>
                    {MENU_ITEMS.map((item) => (
                        <li key={item.label} className={styles.menuItem}>
                            <a href={item.link}>
                                <span>{item.label}</span>
                                <DownSvg/>
                            </a>
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
