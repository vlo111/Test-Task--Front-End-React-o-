import { useEffect, useState } from "react";
import styles from "./Menu.module.scss";

const HorizontalMenu = () => {
    const [hidden, setHidden] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 200 && currentScrollY > prevScrollY) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY]);

    return (
        <div
            className={`${styles.horizontalMenu} ${hidden ? styles.hidden : ""}`}
        >
            <nav>
                <ul className={styles.menuItems}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li className={styles.hasSubmenu}>
                        <a href="#more">More</a>
                        <ul className={styles.submenu}>
                            <li><a href="#option1">Option 1</a></li>
                            <li><a href="#option2">Option 2</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HorizontalMenu;
