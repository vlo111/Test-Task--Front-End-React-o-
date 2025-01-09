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

export interface PostPopupProps {
    post: IPost | null;
    onClose: () => void;
    isOpen?: boolean;
}
