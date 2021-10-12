import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postComment } from "../../store/comment";
import './CommentForm.css';

const CommentForm = ({project_id, user_id}) => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const data = await dispatch(postComment(project_id, user_id, description));
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
