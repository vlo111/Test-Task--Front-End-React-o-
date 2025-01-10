import { IPost } from '../../../types';
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
                <span className={styles.tags}>{post.tags}</span>
                <h2 className={styles.title}>{post.title}</h2>
                <div className={styles.meta}>
                    <span className={styles.auter}>{post.autor}</span>
                    <span className={styles.date}>{post.date}</span>
                    <span className={styles.views}>{post.views} Views</span>
                </div>
                <p className={styles.description}>{post.text}</p>
            </div>
        </article>
    );
};

export default PostCard;
