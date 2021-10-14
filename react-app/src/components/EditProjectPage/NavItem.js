import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ emoji, text, link}) => {
  return (
    <NavLink to={link} className='edit-page-item' activeClassName='active'>
      <div className='edit-page-item-content'>
        <div className='emoji'>{emoji}</div>
        {text}
      </div>
    </NavLink>
  )
}

export default NavItem;
