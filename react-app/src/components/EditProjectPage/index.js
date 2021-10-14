import React from 'react';
import Logo from '../Navigation/logo';
import NavItem from './NavItem';
import '../Navigation/Navigation.css';
import './EditProjectPage.css';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';

const EditProjectPage = () => {
  const { path, url } = useRouteMatch(); //Allows for backwards compatibility of route names
  return (
    <>
      <nav className='nav-bar'>
        <div className=''>
          <NavLink to='/' className='nav-button' exact={true} activeClassName='active'>
            <Logo />
          </NavLink>
        </div>
        <button className='btn-primary edit-project-next'>
          Next
        </button>
      </nav>
      <div className='shadow-wrapper'>
        <div className='edit-page-spacer'>
          <div className='edit-page-items-container'>
            <NavItem emoji='✍️' text='Basics' link={`${url}/basics`}/>
            <NavItem emoji='📊' text='Funding' link={`${url}/funding`}/>
            <NavItem emoji='🎁' text='Updates' link={`${url}/updates`}/>
            <NavItem emoji='📖' text='Story' link={`${url}/story`}/>
            <NavItem emoji='👥' text='People' link={`${url}/people`}/>
            <NavItem emoji='💰' text='Payment' link={`${url}/payment`}/>
            <NavItem emoji='📢' text='Promotion' link={`${url}/promotion`}/>
          </div>
        </div>
      </div>
      <Route path={`${path}/basics`}>basics</Route>
      <Route path={`${path}/funding`}>funding</Route>
      <Route path={`${path}/updates`}>updates</Route>
      <Route path={`${path}/story`}>story</Route>
      <Route path={`${path}/people`}>people</Route>
      <Route path={`${path}/payment`}>payment</Route>
      <Route path={`${path}/promotion`}>promotion</Route>
    </>
  )
}

export default EditProjectPage;
