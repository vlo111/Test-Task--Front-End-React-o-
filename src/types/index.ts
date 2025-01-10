export interface IPost {
    title: string;
    text: string;
    tags: string;
    autor: string;
    img: string;
    img_2x: string;
    date: string;
    views: string;
}

export interface ISearchContextType {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    isSearchVisible: boolean;
    setIsSearchVisible: (visible: boolean) => void;
}
