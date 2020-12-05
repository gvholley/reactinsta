import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
    <Avatar
      className="post_avatar"
      alt='Kaori'
      src="/static/images/avatar/1.jpg"
      />
    <h3>Username</h3>
    <img className="post_image" src="https://pbs.twimg.com/media/EnrPcbGVoAEZe2P?format=jpg&name=large" alt="" />
    <h4 className="post_text"><strong>Grant87</strong>: So beautiful!</h4>
    </div>
    )
}

export default Post

