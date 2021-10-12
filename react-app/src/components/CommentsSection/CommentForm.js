import React, { useState } from "react";
import './CommentForm.css';

const CommentForm = () => {
  const [description, setDescription] = useState('');

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <form className='form-container'>
      <div>
          <textarea
            name='description'
            placeholder='Your comment here'
            value={description}
            onChange={updateDescription}
            className='input'
          />
        </div>
    </form>
  )
}

export default CommentForm;
