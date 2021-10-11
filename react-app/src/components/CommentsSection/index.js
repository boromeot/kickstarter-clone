import React from "react";
import { NavLink } from "react-router-dom";
import Comment from "./Comment";
import './CommentsSection.css';

const CommentsSection = ({ comments, project_id, user }) => {
  return (
    <div className='comments-container'>
      <div>
        {user ? null : <div className='comments-login-notification'>You must be logged in to comment</div> }
        <div className='comments-section'>
          {
            comments.map(comment => {
              return <Comment comment={comment} />
            })
          }
        </div>
      </div>
      <div className='comments-right-col'>
        <p className='comments-right-top-text'>
          This is your space to offer support and feedback. Remember to be constructive—there's a human behind this project.
        </p>
        <p className='comments-right-bottom-text'>
          Have a question for the creator?
        </p>
        <NavLink className='comments-right-link' to={`/projects/${project_id}/faqs`}>Check this project's FAQ</NavLink>
      </div>
    </div>
  )
}

export default CommentsSection;
