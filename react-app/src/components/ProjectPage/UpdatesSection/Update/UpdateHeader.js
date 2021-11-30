import React from "react";

const UpdateHeader = ({ update, index}) => {
  return (
    <header>
      <div className='update-counter-container'>
        <span className='update-counter'>{`Update #${index + 1}`}</span>
      </div>
      <h2 className='update-header'>{update?.title}</h2>
      <div className='update-author-container '>
        <img className='update-author-icon' alt=""/>
        <div className='pl2'>
          <div>
            {update?.username}
            <span className='update-author-creator'>Creator</span>
          </div>
          <span className='update-date'>{update?.created_at}</span>
        </div>
      </div>
  </header>
  )
}

export default UpdateHeader;
