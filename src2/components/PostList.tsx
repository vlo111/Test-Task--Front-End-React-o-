import { FC, useState, useEffect } from "react";
import { fetchPosts } from "../utils/api";
import { IPost } from "../types/Post";
import PostCard from "./PostCard";
import Modal from "./Modal";

const PostList: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [selectedPost, setSelectedPost] = useState<IPost | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchPosts()
            .then(setPosts)
            .catch((error) => console.error("Failed to fetch posts:", error));
    }, []);

    const openModal = (post: IPost) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedPost(null);
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="grid">
                {posts.map((post) => (
                    <PostCard
                        key={post.title}
                        post={post}
                        onCardClick={() => openModal(post)}
                    />
                ))}
            </div>
            <Modal isOpen={isModalOpen} post={selectedPost} onClose={closeModal} />
        </div>
    );
};

export default PostList;
