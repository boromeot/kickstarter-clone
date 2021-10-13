import React from "react";

const TitleForm = ({ title, handleChange, currentStep}) => {
  //Return no JSX if not on this step yet
  if (currentStep !== 3) {
    return null;
  }

  return (
    <textarea
      name='title'
      value={title}
      onChange={handleChange}
      placeholder='title'
    />
  )
}

export default TitleForm;
