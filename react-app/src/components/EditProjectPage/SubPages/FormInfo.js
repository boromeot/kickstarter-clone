import React from "react";
import './FormInfo.css';

const FormInfo = ({ header, infoArr }) => {
  return (
    <div className='form-info-container'>
      <h2 className='form-info-header'>{header}</h2>
      {infoArr.map((info, i) => {
        return <p className='form-info' key={i}>{info}</p>
      })}
    </div>
  )
}

export default FormInfo;
