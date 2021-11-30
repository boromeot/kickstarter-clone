import React from "react";
import Update from "./Update";
import { NavLink, useRouteMatch } from "react-router-dom";
import './UpdatesSection.css';
import './Update/Update.css';

const UpdatesSection = ({ updates }) => {
  const { url } = useRouteMatch();

  return (
    <div className='updates-section'>
        <div className='pt6 bg-grey-100'>
          <div className='grid-container'>
            <div className='grid-row'>
              {
                updates?.map((update, index) => {
                  return (
                    <div className='update-spacer'>
                      <div className='hamburger-icon-container'>
                        <svg className='hamburger-icon' viewBox='0 0 60 60' aria-hidden="true">
                          <path d="M30 52C17.85 52 8 42.15 8 30S17.85 8 30 8s22 9.85 22 22-9.85 22-22 22zm-9-32c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h13c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1H21zm0 6c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h18c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1H21zm0 6c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h18c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1H21zm0 6c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h6c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1h-6z" fill-rule="evenodd" />
                        </svg>
                      </div>
                      <NavLink className='update-container' to={`${url}/${update?.id}`}>
                        <div className='update'>
                          <Update update={update} index={index}/>
                        </div>
                      </NavLink>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default UpdatesSection;
