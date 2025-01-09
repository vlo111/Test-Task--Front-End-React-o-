import { FC } from "react";
import { IPost } from "../types/Post";

interface ModalProps {
    isOpen: boolean;
    post: IPost | null;
    onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, post, onClose }) => {
    if (!isOpen || !post) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <img src={post.img} srcSet={`${post.img_2x} 2x`} alt={post.title} />
                <h2>{post.title}</h2>
                <p>{post.text}</p>
            </div>
        </div>
    );
};

export default Modal;
