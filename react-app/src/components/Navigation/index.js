import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from './logo';
import './Navigation.css'

const Navigation = () => {
  return (
    <nav className='nav-bar'>
      <div className='nav-section'>
        <NavLink to='#' className='nav-button' id='discover'>
          Discover
        </NavLink>
        <NavLink to='#' className='nav-button'>
          Start a project
        </NavLink>
      </div>
      <div className='nav-section nav-section-logo'>
        <NavLink to='/' className='nav-button'>
          <Logo />
        </NavLink>
      </div>
      <div className='nav-section'>
        <span className='nav-button'>Search</span>
        <NavLink to='#' className='nav-button' id='login'>
          Login
        </NavLink>
      </div>
    </nav>
  )
};

export default Navigation;
