import React from "react";
import './Comment.css';

const Comment = ({ comment }) => {
  return (
    <div className='comment-container'>
      <div className='comment-header'>
        <div className='comment-profile'>
          👤
        </div>
        <div className='comment-info'>
          <span>{comment.username}</span>
          <time className='comment-time'>30 minutes ago</time>
        </div>
      </div>
      <div className='comment-description'>
        {comment.description}
        <div>
          <button className='btn-edit comment-edit' >Edit</button>
          <button className='btn-delete comment-delete' >Delete</button>
        </div>
      </div>
    </div>
  )
}
export default Comment;
