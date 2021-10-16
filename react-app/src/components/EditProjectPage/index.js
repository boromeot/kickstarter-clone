import React, { useState, useEffect } from 'react';
import Logo from '../Navigation/logo';
import NavItem from './NavItem';
import '../Navigation/Navigation.css';
import './EditProjectPage.css';
import { NavLink, Route, Redirect, useRouteMatch, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProject } from '../../store/project';
import { createUpdate } from '../../store/update';
import { getTags } from '../../store/tag';
import BasicsPage from './SubPages/BasicsPage';
import FundingPage from './SubPages/FundingPage';
import StoryPage from './SubPages/StoryPage';
import UpdatesPage from './SubPages/UpdatesPage';

const EditProjectPage = () => {
  const dispatch = useDispatch();
  const { projectId } = useParams()
  const { path, url } = useRouteMatch(); //Allows for backwards compatibility of route names
  const user = useSelector(state => state.session.user);
  const project = useSelector(state => state.project);
  const [formData, setFormData] = useState({
    ...project
  })
  const [newUpdate, setNewUpdate] = useState({});

  useEffect(() => {
    dispatch(getProject(projectId));
    dispatch(getTags())
  }, [dispatch, projectId])

  useEffect(() => {
    setFormData({
      ...project,
    })
  }, [project])

  const handleChange = e => {
    const { name, value } = e.target;
    const oldState = { ...formData };
    setFormData({
      ...oldState,
      [name]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    if (window.location.pathname === `${url}/updates`) {
      const response = await fetch(`/api/updates/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUpdate)
      });

      console.log(newUpdate);
      if (response.ok) {
        const data = await response.json();
        dispatch(createUpdate(data));
        return response
      }
    } else {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData
        })
      });
    }

  }

  const handleRTE = (data) => {
    const name = "campaign";
    const oldState = {...formData};
    console.log(oldState);
    setFormData({
      ...oldState,
      [name]: data
    })
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
            <NavItem emoji='✍️' text='Basics' link={`${url}/basics`} />
            <NavItem emoji='📊' text='Funding' link={`${url}/funding`} />
            <NavItem emoji='📝' text='Updates' link={`${url}/updates`} />
            <NavItem emoji='📖' text='Story' link={`${url}/story`} />
            <NavItem emoji='👥' text='People' link={`${url}/people`} />
            <NavItem emoji='💰' text='Payment' link={`${url}/payment`} />
            <NavItem emoji='📢' text='Promotion' link={`${url}/promotion`} />
          </div>
        </div>
      </div>
      <Route path={`${path}/basics`}>
        <BasicsPage handleChange={handleChange}
          title={formData.title}
          description={formData.description}
          tag_id={formData.tag_id}
          video_src={formData.video_src}
          image_src={formData.image_src}
          start_date={formData.start_date}
          end_date={formData.end_date}
        />
      </Route>
      <Route path={`${path}/funding`}>
        <FundingPage handleChange={handleChange}
          pledge_goal={formData.pledge_goal}
        />
      </Route>
      <Route path={`${path}/updates`}>
        <UpdatesPage setNewUpdate={setNewUpdate} newUpdate={newUpdate} />
        {/* {console.log(formData)} */}
      </Route>
      <Route path={`${path}/story`}>
        <StoryPage
          campaign={formData.campaign}
          handleRTE={handleRTE}
        />
      </Route>
      <Route path={`${path}/people`}>people</Route>
      <Route path={`${path}/payment`}>payment</Route>
      <Route path={`${path}/promotion`}>promotion</Route>
    </form>
  )
}

export default EditProjectPage;
