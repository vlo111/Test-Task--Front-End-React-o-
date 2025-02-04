import { IPost } from '../../../types';
import styles from './Modal.module.scss';
import CloseSvg from "../../../assets/icons/close.svg";

interface PostPopupProps {
    post: IPost;
    onClose: () => void;
}

const PostPopup: React.FC<PostPopupProps> = ({ post, onClose }) => {
    const handleBackgroundClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.overlay} onClick={handleBackgroundClick}>
            <div className={styles.popup}>
                <button className={styles.closeButton} onClick={onClose}>
                    <CloseSvg />
                </button>
                <h2>{post.title}</h2>
                <div>
                    <img
                        src={post.img}
                        srcSet={`${post.img} 1x, ${post.img} 2x`}
                        alt={post.title}
                    />
                    <p>{post.text}</p>
                    <div className={styles.meta}>
                        <span>{post.date}</span>
                        <span>{post.autor}</span>
                        <span>{post.tags} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostPopup;
