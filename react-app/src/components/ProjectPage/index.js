import React, { useEffect } from 'react';
import './ProjectPage.css'
import * as projectAction from '../../store/project';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useParams } from 'react-router';
import { BrowserRouter, NavLink } from 'react-router-dom';

const ProjectPage = () => {
  const { projectId } = useParams();
  const {id, title, description, video_src, image_src, current_funding, pledge_goal} = useSelector(state => state.project)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectAction.getProject(projectId))
  }, [dispatch, projectId])
  return (
    <div id='project-container'>
      <div id='project-header'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div id='project-body'>
        <div id='project-left-col'>
          <div id='project-image-conatiner'>
            {video_src ?
              <iframe id='project-video' src={video_src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              : <img id='project-image' src={image_src}></img>
            }
          </div>
          <div id='project-minor-info'>
            <span>Project we love</span>
            <span>Nice</span>
            <span>New York, USA</span>
          </div>
        </div>
        <div id='project-pledge'>
          <div id='project-progress-bar'>
            <div id='project-progress' style={{width: `${(current_funding / pledge_goal) * 100}%`}} />
          </div>
          <div id='project-info-container'>
            <div>
              <div className='project-main-info-header pledge-amount'>
                <span>${current_funding}</span>
              </div>
              <span className='project-main-info-description'>pledged of ${pledge_goal} goal</span>
            </div>
            <div>
              <div className='project-main-info-header'>
                <span>611</span>
              </div>
              <span className='project-main-info-description'>backers</span>
            </div>
            <div>
              <div className='project-main-info-header'>
                <span>33</span>
              </div>
              <span className='project-main-info-description'>days to go</span>
            </div>
          </div>
          <div>
            <NavLink className='btn-primary' id='pledge-btn' to='#'>
              Back this project
            </NavLink>
          </div>
        </div>
      </div>
      <div className='project-disclaimer-bar'>
          <div className='project-disclaimer-item'>
            Kickstarter connects creators with backers to fund projects.
          </div>
          <div className='project-disclaimer-item'>
            Rewards aren’t guaranteed, but creators must regularly update backers.
          </div>
          <div className='project-disclaimer-item'>
            You’re only charged if the project meets its funding goal by the campaign deadline.
          </div>
      </div>
      <div className='test'>
        <div className='test-block'>
            <div className='test-item-container'>
              <NavLink to={`/projects/${id}/description`} className='test-item' activeClassName='active-test'>
                Campaign
              </NavLink>
              <NavLink to={`/projects/${id}/risks`} className='test-item' activeClassName='active-test'>
                Risk
              </NavLink>
              <NavLink to={`/projects/${id}/faqs`} className='test-item' activeClassName='active-test'>
                FAQ
              </NavLink>
              <NavLink to={`/projects/${id}/updates`} className='test-item' activeClassName='active-test'>
                Updates
              </NavLink>
              <NavLink to={`/projects/${id}/comments`} className='test-item' activeClassName='active-test'>
                Comments
              </NavLink>
            </div>
            <div className='test-item-container'>
              <button className='btn-primary test-item-btn'>
                Back this project
              </button>
            </div>
        </div>
      </div>
      <Route path={`/projects/${id}/description`}>
        Campaign
      </Route>
      <Route path={`/projects/${id}/risks`}>
        Risks
      </Route>
      <Route path={`/projects/${id}/faqs`}>
        Faqs
      </Route>
      <Route path={`/projects/${id}/updates`}>
        Updates
      </Route>
      <Route path={`/projects/${id}/comments`}>
        Comments
      </Route>
    </div>
  )
}

export default ProjectPage;
