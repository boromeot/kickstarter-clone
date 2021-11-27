import React from "react";
import { NavLink } from 'react-router-dom';
import './UpdatePage.css';

const UpdatePage = () => {
  return (
    <div className='grid-container py6'>
      <div className='update-page'>
        <div className='pb8'>
          <NavLink className='update-page-all-updates' to='#'>
            <div>
              <span>All updates</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default UpdatePage;
