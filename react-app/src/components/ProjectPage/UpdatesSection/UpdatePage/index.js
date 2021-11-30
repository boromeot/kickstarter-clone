import React from "react";
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UpdateHeader from "../Update/UpdateHeader";
import UpdateBody from "../Update/UpdateBody";
import './UpdatePage.css';


const UpdatePage = () => {
  const { projectId, updateId } = useParams();
  const update = useSelector(state => state.project.updates?.find(update => update.id === +updateId));
  return (
    <div className='grid-container py6'>
      <div className='update-page'>
        <div className='pb8'>
          <NavLink className='update-page-all-updates btn-secondary' to={`/projects/${projectId}/updates`}>
            <div className='flex-center'>
              <svg className='icon-12 ' viewBox='0 0 60 60'>
                <path fill-rule="nonzero" d="M14 30l26 26 5-5-21-21L45 9l-5-5"></path>
              </svg>
              <span className='ml2'>All updates</span>
            </div>
          </NavLink>
        </div>
        <UpdateHeader update={update} />
        <UpdateBody update={update} className={'update-body'} />
        <footer className='flex align-center py3 mt8 border-bottom border-top'>
          <button className='flex-center btn btn-secondary btn-medium'>
            <svg className='icon-20' viewBox='0 0 60 60'>
              <path d="M50.977 10.664c4.402 3.202 6.03 8.916 4.41 14.052-1.216 3.858-3.88 7.266-6.706 10.092-4.99 4.99-15.327 14.174-18.023 16.56-.38.336-.934.336-1.312 0-2.698-2.386-13.034-11.57-18.024-16.56-2.825-2.826-5.49-6.234-6.707-10.092-1.618-5.136.008-10.85 4.41-14.052 3.434-2.498 8.102-3.17 12.192-2.162C25.197 9.51 28.2 12.506 30 16.004c1.8-3.498 4.803-6.494 8.785-7.502 4.09-1.008 8.758-.336 12.192 2.162z"></path>
            </svg>
            Like
          </button>
        </footer>
      </div>
    </div>
  )
}

export default UpdatePage;
