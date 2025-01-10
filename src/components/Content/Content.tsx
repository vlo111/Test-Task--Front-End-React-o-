import { useState, useEffect } from 'react';
import { useSearch } from '../../context/SearchContext';
import { IPost } from '../../types/post';
import PostCard from '../Post/PostCard/PostCard';
import PostPopup from '../Post/PostModal/PostModal';
import styles from './Content.module.scss';

const Content = () => {
    const { searchQuery } = useSearch();
    const [posts, setPosts] = useState<IPost[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
    const [selectedPost, setSelectedPost] = useState<IPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch posts on component mount
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://cloud.codesupply.co/endpoint/react/data.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
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

    // Filter posts whenever search query changes
    useEffect(() => {
        if (!posts.length) return;

        const searchTerm = searchQuery.toLowerCase().trim();

        if (searchTerm === '') {
            setFilteredPosts(posts);
            return;
        }

        const filtered = posts.filter(post =>
            post.title.toLowerCase().includes(searchTerm) ||
            post.text.toLowerCase().includes(searchTerm)
        );

        setFilteredPosts(filtered);
    }, [searchQuery, posts]);

    if (loading) {
        return <div className={styles.loading}>Loading posts...</div>;
    }

    if (error) {
        return <div className={styles.error}>Error: {error}</div>;
    }

    return (
        <div className={styles.content}>
            <div className={styles.grid}>
                {filteredPosts.length > 0 ? (
                    filteredPosts.map(post => (
                        <PostCard
                            key={post.date}
                            post={post}
                            onClick={() => setSelectedPost(post)}
                        />
                    ))
                ) : (
                    <div className={styles.noResults}>
                        No posts found for "{searchQuery}"
                    </div>
                )}
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
