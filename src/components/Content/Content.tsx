import { useState, useEffect } from 'react';
import { useSearch } from '../../context/SearchContext';
import { IPost } from '../../types';
import { fetchPosts } from '../../utils/api.ts';
import PostCard from '../Post/PostCard/PostCard';
import PostModal from '../Post/PostModal/PostModal';
import styles from './Content.module.scss';

const Content = () => {
    const { searchQuery } = useSearch();
    const [posts, setPosts] = useState<IPost[]>([]);
    const [selectedPost, setSelectedPost] = useState<IPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                setLoading(true);
                const data = await fetchPosts();
                setPosts(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load posts');
            } finally {
                setLoading(false);
            }
        };

        loadPosts();
    }, []);

    const filteredPosts = posts.filter(post => {
        if (!searchQuery.trim()) return true;
        const searchTerm = searchQuery.toLowerCase();
        return (
            post.title.toLowerCase().includes(searchTerm) ||
            post.text.toLowerCase().includes(searchTerm)
        );
    });

    if (loading) return <div className={styles.loading}>Loading posts...</div>;
    if (error) return <div className={styles.error}>{error}</div>;

    return (
        <div className={styles.content}>
            <div className={styles.grid}>
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post, index) => (
                        <PostCard
                            key={post.date + index}
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
                <PostModal
                    post={selectedPost}
                    onClose={() => setSelectedPost(null)}
                />
            )}
        </div>
    );
};

export default Content;
