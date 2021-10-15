import React from "react";
import '../../FormWrapper.css';
import '../StoryForm.css';

const StoryForm = () => {
  return (
    // <div className='edit-page-spacer'>
    //   <div className='form-info-container'>
    //     ggg
    //   </div>
    // </div>
    <div className='form-wrapper-border'>
      <div className='edit-page-spacer'>
        <div className='form-wrapper-spacer'>
          <div className='form-info-container' id='story-form-info-container'>
            <h2 className='form-info-header'>Project description</h2>
            <p className='form-info' id='story-form-info'>Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are. Your description should tell backers everything they need to know. If possible, include images to show them what your project is all about and what rewards look like.</p>
            <div className='story-form'>
              Form goes here
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoryForm;
