import React, { createContext, useContext, useState, ReactNode } from 'react';
import {ISearchContextType} from "../types";

const SearchContext = createContext<ISearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery, isSearchVisible, setIsSearchVisible }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};
