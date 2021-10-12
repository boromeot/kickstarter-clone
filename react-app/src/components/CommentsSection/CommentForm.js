import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postComment, patchComment } from "../../store/comment";
import './CommentForm.css';

const CommentForm = ({project_id, user_id, comment_id, setShow, method}) => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (method === 'POST') {
      const data = await dispatch(postComment(description, project_id, user_id));
    } else if (method === 'PATCH') {
      const data = await dispatch(patchComment(description, project_id, user_id, comment_id))
    }
    setShow(false);
  }

  return (
    <form onSubmit={onSubmit} className='form-container'>
      <div>
          <textarea
            name='description'
            placeholder='Your comment here'
            value={description}
            onChange={updateDescription}
            className='input'
          />
        </div>
      <button className='btn-primary' type='submit'>Submit</button>
    </form>
  )
}

export default CommentForm;
