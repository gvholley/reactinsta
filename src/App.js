import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Post from './Post.js';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Kaori",
      caption: "WOW",
      imageUrl: "https://pbs.twimg.com/media/EnrPcbGVoAEZe2P?format=jpg&name=large"
    },
    {
      username: "Kaori",
      caption: "WOW",
      imageUrl: "https://pbs.twimg.com/media/EnrPcbGVoAEZe2P?format=jpg&name=large"
    }
  ]);

  return (
    <div className="App">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://i.pinimg.com/originals/fc/26/50/fc26502254db62ce6b29debec1a56e80.png"
          alt="logo"
        />
      </div>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
          ))
      }

      <Post username="Kaori" caption="WOW" imageUrl="https://pbs.twimg.com/media/EnrPcbGVoAEZe2P?format=jpg&name=large" />
      <Post username="Kaori" caption="WOW" imageUrl="https://pbs.twimg.com/media/EnrPcbGVoAEZe2P?format=jpg&name=large" />
      <Post username="Kaori" caption="WOW" imageUrl="https://pbs.twimg.com/media/EnrPcbGVoAEZe2P?format=jpg&name=large" />

    </div>
  );
}

export default App;
