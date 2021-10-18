import React, { useState} from "react";

const BackerForm = ({ project_id, setShow }) => {
  const [additional_funding, setAdditional_funding] = useState(0);

  const handleChange = e => {
    setAdditional_funding(e.target.value);
  }

  const onSubmit = async e => {
    e.preventDefault();
    const response = await fetch(`/api/projects/${project_id}/funding`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        additional_funding,
      })
    });
    if (response.ok) {

    } else {
      const data = await response.json();
      alert(data.error)
    }
    setShow(false);
  }

  return (
    <form onSubmit={onSubmit} className='form-container'>
      <div>
        <input
          name='description'
          placeholder=''
          value={additional_funding}
          onChange={handleChange}
          className='input'
          type='number'
        />
      </div>
      <button className='btn-primary' type='submit'>Submit</button>
    </form>
  )
}

export default BackerForm;
