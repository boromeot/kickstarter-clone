import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Comment from "./Comment";
import './CommentsSection.css';
import Modal from '../Modal/index';
import CommentForm from "./CommentForm";

const CommentsSection = ({ comments, project_id, user }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='comments-container'>
      <div>
        {user ? null : <div className='comments-login-notification flex-center'>You must be logged in to comment</div> }
        <div className='comments-section'>
          {
            comments.map(comment => {
              return <Comment comment={comment} />
            })
          }
        </div>
      </div>
      <div className='comments-right-col'>
        <div className='comments-right-col-info'>
          <p className='comments-right-top-text'>
            This is your space to offer support and feedback. Remember to be constructive—there's a human behind this project.
          </p>
          <p className='comments-right-bottom-text'>
            Have a question for the creator?
          </p>
          <NavLink className='comments-right-link' to={`/projects/${project_id}/faqs`}>Check this project's FAQ</NavLink>
        </div>
          <button className='comments-btn btn-primary' onClick={() => setShow(true) }>
            Add a comment
          </button>
          <Modal title='Add a comment' onClose={() => setShow(false)} show={show}>
            <CommentForm project_id={project_id} user_id={user.id} setShow={setShow} />
          </Modal>
      </div>
    </div>
  )
}

export default CommentsSection;
