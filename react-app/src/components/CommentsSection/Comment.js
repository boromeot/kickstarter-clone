import React from "react";
import { useSelector } from "react-redux";
import './Comment.css';

const Comment = ({ comment }) => {
  const user = useSelector(state => state.session.user)
  const commentUserId = comment.user_id;
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
        {
          user?.id === commentUserId &&
          <div className='comment-buttons'>
            <button className='btn-edit comment-edit' >Edit</button>
            <button className='btn-delete comment-delete' >Delete</button>
          </div>
        }
      </div>
      <div className='comment-description'>
        {comment.description}
      </div>
    </div>
  )
}
export default Comment;
