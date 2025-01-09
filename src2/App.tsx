import PostList from './components/PostList';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="header">
                <h1>Posts Gallery</h1>
            </header>
            <main>
                <PostList />
            </main>
        </div>
    );
};

export default App;
