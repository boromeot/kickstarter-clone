import React from "react";
import FormWrapper from "../FormWrapper";

const ImageForm = () => {
  const infoArr = [
    'Add an image that clearly represents your project. Choose one that looks good at different sizes—it’ll appear on your project page, across the Kickstarter website and mobile apps, and (when shared) on social channels.',
    'Your image should be at least 1024x576 pixels. It will be cropped to a 16:9 ratio.',
    'Avoid images with banners, badges, or text—they are illegible at smaller sizes, can be penalized by the Facebook algorithm, and decrease your chances of getting Kickstarter homepage and newsletter features.'
  ]
  return (
    <FormWrapper header='Project Image' infoArr={infoArr}>

    </FormWrapper>
  )
}

export default ImageForm;
