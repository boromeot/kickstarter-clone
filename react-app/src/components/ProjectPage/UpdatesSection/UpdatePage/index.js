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
              <svg className='icon-small ' viewBox='0 0 60 60'>
                <path fill-rule="nonzero" d="M14 30l26 26 5-5-21-21L45 9l-5-5"></path>
              </svg>
              <span className='ml2'>All updates</span>
            </div>
          </NavLink>
        </div>
        <UpdateHeader update={update} />
        <UpdateBody update={update} className={'update-body'} />
      </div>
    </div>
  )
}

export default UpdatePage;
