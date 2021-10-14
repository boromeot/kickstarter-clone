import React from "react";
import '../../../CreateProjectPage/StartForms/css/text-area.css'

const TitleForm = ({title, handleChange}) => {
  return (
    <textarea
      name='title'
      value={title}
      onChange={handleChange}
      placeholder='Papercuts: A Party Game for the Rude and Well-Read'
      className='start-text-area'
    />
  )
}

export default TitleForm;
