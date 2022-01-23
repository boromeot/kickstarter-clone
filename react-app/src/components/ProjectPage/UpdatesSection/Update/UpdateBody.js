import React from "react";

const UpdateBody = ({ update, className }) => {
  return (
    <div className={className}>
        <div className='mt4'>
          <div className='update-content'>
            <p>
              { update.description}
            </p>
          </div>
        </div>
      </div>
  )
}

export default UpdateBody;
