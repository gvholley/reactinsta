import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Post from './Post.js';
import db from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, []);

  const signUp = (event) => {

  };

  return (
    <div className="App">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
      <div style={modalStyle} className={classes.paper}>
      <center>
        <img
          className="app_headerImage"
          src="https://i.pinimg.com/originals/fc/26/50/fc26502254db62ce6b29debec1a56e80.png"
          alt="logo"
        />

        <Input
          placeholder="username"
          type="text"
          value={email}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={signUp}>Sign Up</Button>
      </center>
      </div>

      </Modal>

      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://i.pinimg.com/originals/fc/26/50/fc26502254db62ce6b29debec1a56e80.png"
          alt="logo"
        />
      </div>

      <Button onClick={() => setOpen(true)}>Sign up</Button>

      {
        posts.map(({id, post}) => (
          <Post key={id} caption={post.caption} username={post.username} imageUrl={post.imageUrl} />
          ))
      }




    </div>
  );
}

export default App;
