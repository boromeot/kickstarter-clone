import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './Comment.css';
import { deleteComment } from "../../store/comment";

const Comment = ({ comment }) => {
  const user = useSelector(state => state.session.user)
  const commentUserId = comment.user_id;
  const dispatch = useDispatch();

  const onDelete = async e => {
    e.preventDefault()
    await dispatch(deleteComment(comment.id))
  }

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
            <button className='btn-delete comment-delete' onClick={onDelete}>Delete</button>
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
