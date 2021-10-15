import React from "react";
import FormWrapper from "../../FormWrapper";

const ImageForm = ({ image_src, handleChange }) => {
  const infoArr = [
    'Add an image that clearly represents your project. Choose one that looks good at different sizes—it’ll appear on your project page, across the Kickstarter website and mobile apps, and (when shared) on social channels.',
    'Your image should be at least 1024x576 pixels. It will be cropped to a 16:9 ratio.',
    'Avoid images with banners, badges, or text—they are illegible at smaller sizes, can be penalized by the Facebook algorithm, and decrease your chances of getting Kickstarter homepage and newsletter features.'
  ]
  return (
    <FormWrapper header='Project Image' infoArr={infoArr}>
      <div className='title-form-container'>
        <div className='title-form-title-container'>
          <div className='title-form-header'>Title</div>
          <textarea
            name='image_src'
            value={image_src}
            onChange={handleChange}
            placeholder='https://www.somewebsite.com/image.jpg'
            className='title-form-text-area edit-page-text-area'
            maxLength={100}
          />
          <div className='title-form-character-count'>{image_src?.length}/100</div>
        </div>
      </div>
    </FormWrapper>
  )
}

export default ImageForm;
