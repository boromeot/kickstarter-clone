import React from "react";
import { NavLink } from "react-router-dom";
import RightChevron from "../../../SVGS/RightChevron";

const FAQ = ({ faq }) => {
  return (
    <div className='mb2 border-gray'>
      <NavLink to='#' className='p3 flex hover-bg-gray-200 navy-700'>
        <span className='font-size--14 medium'>{faq.question}</span>
        <span className='pl3 ml-auto'>
          <RightChevron className='icon-12 fill-navy' viewBox='0 0 60 60'/>
        </span>
      </NavLink>
    </div>
  )
}

export default FAQ;
