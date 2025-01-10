import { useState } from "react";
import styles from "./Menu.module.scss";

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
            <div
                className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}
            >
                <div className={styles.close} onClick={toggleMenu}>
                    ×
                </div>
                <ul className={styles.menuItems}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#more">More</a></li>
                </ul>
            </div>
        </>
    );
};

export default MobileMenu;
