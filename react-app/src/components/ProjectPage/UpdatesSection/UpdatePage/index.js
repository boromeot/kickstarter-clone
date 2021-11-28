import React from "react";
import { NavLink } from 'react-router-dom';
import './UpdatePage.css';

const UpdatePage = () => {

  return (
    <div className='grid-container py6'>
      <div className='update-page'>
        <div className='pb8'>
          <NavLink className='update-page-all-updates btn-secondary' to='#'>
            <div className='flex-center'>
              <svg className='icon-small ' viewBox='0 0 60 60'>
                <path fill-rule="nonzero" d="M14 30l26 26 5-5-21-21L45 9l-5-5"></path>
              </svg>
              <span className='ml2'>All updates</span>
            </div>
          </NavLink>
        </div>
        <article>
        </article>
      </div>
    </div>
  )
}

export default UpdatePage;
