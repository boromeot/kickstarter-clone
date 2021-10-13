import React from "react";

const DescriptionForm = ({ description, handleChange, currentStep}) => {
  //Return no JSX if not on this step yet
  if (currentStep !== 2) {
    return null;
  }

  return (
    <div className='start-form-container' id='start-form-description-form-container'>
      <div className='start-form-spacer'>
        <div className='start-form-content'>
          <h2 className='start-form-heading'>Describe what you’ll be creating.</h2>
          <h3 className='start-form-sub-heading'>And don’t worry, you can edit this later, too.</h3>
          <textarea
            name='description'
            value={description}
            onChange={handleChange}
            placeholder='Description'
          />
        </div>
      </div>
    </div>
  )
}

export default DescriptionForm;
