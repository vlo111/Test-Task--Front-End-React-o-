import PostList from "../components/PostList.tsx";

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="home-header">
                <div className="home-header-content">
                    <h1>Welcome to the Posts Gallery</h1>
                    <p>Explore the latest posts from various categories</p>
                </div>
            </header>
            <main>
                <PostList />
            </main>
            <footer className="home-footer">
                <p>&copy; {new Date().getFullYear()} Posts Gallery. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
