import logo from './logo.svg';
import './App.css';
import Post from './Post.js';

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://i.pinimg.com/originals/fc/26/50/fc26502254db62ce6b29debec1a56e80.png"
          alt="logo"
        />
      </div>

      <Post username="Kaori" caption="WOW" imageUrl="https://pbs.twimg.com/media/EnrPcbGVoAEZe2P?format=jpg&name=large" />
      <Post />
      <Post />

    </div>
  );
}

export default App;
