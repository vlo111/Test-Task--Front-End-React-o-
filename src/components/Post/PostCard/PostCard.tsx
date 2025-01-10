import { IPost } from '../../../types/post';
import styles from './PostCard.module.scss';

interface PostCardProps {
    post: IPost;
    onClick: (post: IPost) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => {
    return (
        <article className={styles.card} onClick={() => onClick(post)}>
            <div className={styles.imageWrapper}>
                <img
                    src={post.img}
                    srcSet={`${post.img} 1x, ${post.img} 2x`}
                    alt={post.title}
                    loading="lazy"
                />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.description}>{post.text}</p>
                <div className={styles.meta}>
                    <span>{post.date}</span>
                    <span>{post.autor}</span>
                    <span>{post.text} Comments</span>
                </div>
            </div>
        </article>
    );
};

export default PostCard;
