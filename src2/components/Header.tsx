import { useState, useEffect } from 'react';
import '../styles/Header.scss';

const Header = () => {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsHidden(currentScrollY > lastScrollY && currentScrollY > 200);
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isHidden ? 'header--hidden' : ''}`}>
            <nav className="header__nav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
