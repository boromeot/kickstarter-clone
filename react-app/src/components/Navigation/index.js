import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logo from './logo';
import LogoutButton from '../auth/LogoutButton';
import './Navigation.css'
import Modal from '../Modal/index';
import Tags from '../Tags';
import getTags from '../../store/tag'

const Navigation = () => {
  const user = useSelector(state => state.session.user);
  const tags = useSelector(state => state.tag)
  const [showDiscover, setShowDiscover] = useState(false);
  const dispatch = useDispatch()

  console.log("------------")
  // console.log(getTags())
  // getTags()

  useEffect(() => {
    dispatch(getTags())
  }, [dispatch])

  return (
    <nav className='nav-bar'>
      <div className='nav-section'>
        <button onClick={() => setShowDiscover(true)}>Discover</button>
        <Modal title='Discover' className='nav-button' onClose={() => setShowDiscover(false)} show={showDiscover}>
          <Tags tags={tags}/>
        </Modal>
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
