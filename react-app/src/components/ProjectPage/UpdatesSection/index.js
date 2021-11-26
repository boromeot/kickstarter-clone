import React from "react";
import Update from "./Update";
import './UpdatesSection.css';

const UpdatesSection = ({ updates }) => {
  return (
    <div className='updates-section'>
        <div className='pt6 bg-grey-100'>
          <div className='grid-container'>
            <div className='grid-row'>
              <Update />
            </div>
          </div>
        </div>
    </div>
  )
}

export default UpdatesSection;
