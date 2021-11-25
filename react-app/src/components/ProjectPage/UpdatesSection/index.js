import React from "react";
import Update from "./Update";
import './UpdatesSection.css';

const UpdatesSection = ({ updates }) => {
  return (
    <div className='updates-section'>
      <div>
        <div className='pt6 bg-grey-100'>
          <Update />
        </div>
      </div>
    </div>
  )
}

export default UpdatesSection;
