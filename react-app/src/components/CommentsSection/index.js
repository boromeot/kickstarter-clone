import React from "react";
import Comment from "./Comment";
import './CommentsSection.css';

const CommentsSection = ({ comments }) => {
  return (
    <div className='comments-container'>
      <div className='comments-section'>
        {
          comments.map(comment => {
            return <Comment comment={comment} />
          })
        }
      </div>
      <div className='comments-right-col'></div>
    </div>
  )
}

export default CommentsSection;
