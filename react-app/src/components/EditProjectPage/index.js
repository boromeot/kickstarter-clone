import React, { useState, useEffect } from 'react';
import Logo from '../Navigation/logo';
import NavItem from './NavItem';
import '../Navigation/Navigation.css';
import './EditProjectPage.css';
import { NavLink, Route, Redirect, useRouteMatch, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProject } from '../../store/project';
import BasicsPage from './SubPages/BasicsPage';

const EditProjectPage = () => {
  const dispatch = useDispatch();
  const { projectId } = useParams()
  const { path, url } = useRouteMatch(); //Allows for backwards compatibility of route names
  const user = useSelector(state => state.session.user);
  const project = useSelector(state => state.project);
  const [formData, setFormData] = useState({
    ...project
  })

  useEffect(() => {
    dispatch(getProject(projectId));
  }, [dispatch, projectId])

  useEffect(() => {
    setFormData({
      ...project,
    })
  }, [project])

  const handleChange = e => {
    const { name, value } = e.target;
    const oldState = {...formData};
    setFormData({
      ...oldState,
      [name]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData, 'formData');
    const response = await fetch(`/api/projects/${projectId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formData
      })
    });

    const project = await response.json();
    console.log(project);
  }

  if (!user) {
    return <Redirect to='/login' />
  }
  return (
    <form onSubmit={handleSubmit}>
      <nav className='nav-bar'>
        <div className=''>
          <NavLink to='/' className='nav-button' exact={true}>
            <Logo />
          </NavLink>
        </div>
        <button type='submit' className='btn-primary edit-project-next'>
          Save
        </button>
      </nav>
      <div className='shadow-wrapper'>
        <div className='edit-page-spacer'>
          <div className='edit-page-items-container'>
            <NavItem emoji='✍️' text='Basics' link={`${url}/basics`}/>
            <NavItem emoji='📊' text='Funding' link={`${url}/funding`}/>
            <NavItem emoji='📝' text='Updates' link={`${url}/updates`}/>
            <NavItem emoji='📖' text='Story' link={`${url}/story`}/>
            <NavItem emoji='👥' text='People' link={`${url}/people`}/>
            <NavItem emoji='💰' text='Payment' link={`${url}/payment`}/>
            <NavItem emoji='📢' text='Promotion' link={`${url}/promotion`}/>
          </div>
        </div>
      </div>
      <Route path={`${path}/basics`}><BasicsPage title={formData.title} description={formData.description} handleChange={handleChange}/>{formData.title}</Route>
      <Route path={`${path}/funding`}>funding</Route>
      <Route path={`${path}/updates`}>updates</Route>
      <Route path={`${path}/story`}>story</Route>
      <Route path={`${path}/people`}>people</Route>
      <Route path={`${path}/payment`}>payment</Route>
      <Route path={`${path}/promotion`}>promotion</Route>
    </form>
  )
}

export default EditProjectPage;
