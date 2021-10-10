import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logo from './logo';
import LogoutButton from '../auth/LogoutButton';
import './Navigation.css'

const Navigation = () => {
  const user = useSelector(state => state.session.user);

  return (
    <nav className='nav-bar'>
      <div className='nav-section'>
        <NavLink to='#' className='nav-button' id='discover' exact={true} activeClassName='active'>
          Discover
        </NavLink>
        <NavLink to='#' className='nav-button' exact={true} activeClassName='active'>
          Start a project
        </NavLink>
      </div>
      <div className='nav-section nav-section-logo'>
        <NavLink to='/' className='nav-button' exact={true} activeClassName='active'>
          <Logo />
        </NavLink>
      </div>
      <div className='nav-section nav-section-right'>
        <span className='nav-button'>Search</span>
        {user ? <LogoutButton /> :
          <NavLink to='/login' className='nav-button login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        }
      </div>
    </nav>
  )
};

export default Navigation;
