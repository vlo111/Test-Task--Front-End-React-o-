import { useEffect, useState } from "react";
import { MENU_ITEMS, SUBMENU_ITEMS } from "../../../constants/menuConstants.ts";
import styles from "./HorizontalMenu.module.scss";
import DownSvg from '../../../assets/icons/down.svg';

const HorizontalMenu = () => {
    const [menuState, setMenuState] = useState('default'); // 'default' | 'hidden' | 'visible'
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateMenuState = () => {
            const currentScrollY = window.scrollY;
            const currentDirection = currentScrollY > prevScrollY ? 'down' : 'up';

            // Update scroll direction
            if (currentDirection !== scrollDirection) {
                setScrollDirection(currentDirection);
            }

            // Menu state logic
            if (currentScrollY <= 0) {
                setMenuState('default');
            } else if (currentScrollY > 200) {
                if (currentDirection === 'down') {
                    setMenuState('hidden');
                } else {
                    setMenuState('visible');
                }
            } else {
                setMenuState('visible');
            }

            setPrevScrollY(currentScrollY);
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateMenuState);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [prevScrollY, scrollDirection]);

    return (
        <div
            className={`${styles.horizontalMenu} ${styles[menuState]}`}
        >
            <div className={styles.container}>
                <nav>
                    <ul className={styles.menuItems}>
                        {MENU_ITEMS.map((item) => (
                            <li key={item.label} className={styles.menuItem}>
                                <a href={item.link}>
                                    <span>{item.label}</span>
                                    <DownSvg/>
                                </a>
                                <ul className={styles.submenu}>
                                    {SUBMENU_ITEMS.map((submenu) => (
                                        <li key={submenu.label}>
                                            <a href={submenu.link}>
                                                <span>{submenu.label}</span>
                                                <DownSvg/>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default HorizontalMenu;
