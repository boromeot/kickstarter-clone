import React from "react";

const DescriptionForm = ({ description, handleChange, currentStep}) => {
  //Return no JSX if not on this step yet
  if (currentStep !== 2) {
    return null;
  }

  return (
    <textarea
      name='description'
      value={description}
      onChange={handleChange}
      placeholder='Description'
    />
  )
}

export default DescriptionForm;
