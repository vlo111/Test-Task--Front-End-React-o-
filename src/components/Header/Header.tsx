import { useSearch } from '../../context/SearchContext';
import styles from './Header.module.scss';
import TableViewEyeSvg from '../../assets/icons/logo.svg';
import SearchSvg from '../../assets/icons/search.svg';

const Header = () => {
    const { searchQuery, setSearchQuery, isSearchVisible, setIsSearchVisible } = useSearch();

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            setIsSearchVisible(false);
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <TableViewEyeSvg />
                <div className={styles.searchContainer}>
                    <div className={`${styles.searchWrapper} ${isSearchVisible ? styles.visible : ''}`}>
                        <input
                            type="text"
                            className={styles.searchInput}
                            value={searchQuery}
                            onChange={handleSearchChange}
                            onKeyDown={handleKeyDown}
                            placeholder="Search posts..."
                        />
                    </div>
                    <button className={styles.searchIcon} onClick={toggleSearch} aria-label="Toggle search">
                        <SearchSvg />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
