import { useState, useEffect } from 'react';
import { IPost } from '../../types/post';
import PostCard from '../Post/PostCard/PostCard';
import PostPopup from '../Post/PostModal/PostModal';
import styles from './Content.module.scss';

const Content = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
    const [selectedPost, setSelectedPost] = useState<IPost | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://cloud.codesupply.co/endpoint/react/data.json');
                if (!response.ok) throw new Error('Failed to fetch posts');
                const data = await response.json();
                setPosts(data);
                setFilteredPosts(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    useEffect(() => {
        const filtered = posts.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.text.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredPosts(filtered);
    }, [searchQuery, posts]);

    return (
        <div className={styles.content}>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchInput}
                />
            </div>

            {loading && <div className={styles.loading}>Loading posts...</div>}
            {error && <div className={styles.error}>{error}</div>}

            <div className={styles.grid}>
                {filteredPosts.map(post => (
                    <PostCard
                        key={post.text}
                        post={post}
                        onClick={(post) => setSelectedPost(post)}
                    />
                ))}
            </div>

            {selectedPost && (
                <PostPopup
                    post={selectedPost}
                    onClose={() => setSelectedPost(null)}
                />
            )}
        </div>
    );
};

export default Content;
