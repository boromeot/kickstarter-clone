import React, { useState } from "react";
import FormWrapper from "../../FormWrapper";

const ImageForm = ({ image_src, handleChange }) => {
  const infoArr = [
    'Add an image that clearly represents your project. Choose one that looks good at different sizes—it’ll appear on your project page, across the Kickstarter website and mobile apps, and (when shared) on social channels.',
    'Your image should be at least 1024x576 pixels. It will be cropped to a 16:9 ratio.',
    'Avoid images with banners, badges, or text—they are illegible at smaller sizes, can be penalized by the Facebook algorithm, and decrease your chances of getting Kickstarter homepage and newsletter features.'
  ]

  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    console.log('submit');
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch('/api/projects/52/images', {
        method: "POST",
        body: formData,
    });
    if (res.ok) {
        await res.json();
    }
    else {
        console.log("error");
    }
  }

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
}

  return (
    <FormWrapper header='Project Image' infoArr={infoArr}>
      <div style={{height: '210px'}}>
        <label className="pointer h100p w100p relative">
          <div className="bg-grey-100 h100p w100p border-dashed border-gray-500 radius2px border-dashed hover-border-green transition-600ms">
            <input
              type="file"
              accept="image/*"
              onChange={updateImage}
              className="z-1 h100p w100p absolute"
            />
            <div className="flex flex-column justify-center w100p h100p">

            </div>
          </div>
        </label>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </FormWrapper>
  )
}

export default ImageForm;
