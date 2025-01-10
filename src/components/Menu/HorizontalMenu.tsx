import {useEffect, useState} from "react";
import {MENU_ITEMS, SUBMENU_ITEMS} from "../constants/menuConstants";
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
            <div className={styles.container}>
                <nav>
                    <ul className={styles.menuItems}>
                        {MENU_ITEMS.map((item) => (
                            <li key={item.label} className={styles.menuItem}>
                                <a href={item.link}>{item.label}</a>
                                {item.label === 'Post' && (
                                    <ul className={styles.submenu}>
                                        {SUBMENU_ITEMS.map((submenu) => (
                                            <li key={submenu.label}>
                                                <a href={submenu.link}>
                                                    {submenu.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default HorizontalMenu;
