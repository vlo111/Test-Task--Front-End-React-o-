import { FC } from "react";
import { IPost } from "../types/Post";

interface PostCardProps {
    post: IPost;
    onCardClick: () => void;
}

const PostCard: FC<PostCardProps> = ({ post, onCardClick }) => (
    <div className="post-card" onClick={onCardClick}>
        <img src={post.img} alt={post.title} />
        <h3>{post.title}</h3>
        <p>{post.text}</p>
    </div>
);

export default PostCard;
