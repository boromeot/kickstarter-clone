import React, { useEffect, useState } from 'react';
import './ProjectPage.css'
import * as projectAction from '../../store/project';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useParams, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import CommentsSection from '../CommentsSection';
import UpdatesComponent from '../UpdatesComponent';
import FAQ from './FAQ';
import Risks from './Risks';

const ProjectPage = () => {
  const { projectId } = useParams();
  const { id, title, description, video_src, image_src, current_funding, pledge_goal, faqs, risks, comments } = useSelector(state => state.project)
  const user = useSelector(state => state.session.user);

  const projectObj = useSelector(state => state.project)
  const dispatch = useDispatch();
  const { path, url } = useRouteMatch(); //Allows for backwards compatibility of route names

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
              <iframe id='project-video' src={video_src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
            <div id='project-progress' style={{ width: `${(current_funding / pledge_goal) * 100}%` }} />
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
            <NavLink to={`${url}/description`} className='test-item' activeClassName='active-test'>
              Campaign
            </NavLink>
            <NavLink to={`${url}/risks`} className='test-item' activeClassName='active-test'>
              Risk
            </NavLink>
            <NavLink to={`${url}/faqs`} className='test-item' activeClassName='active-test'>
              FAQ
            </NavLink>
            <NavLink to={`${url}/updates`} className='test-item' activeClassName='active-test'>
              Updates
            </NavLink>
            <NavLink to={`${url}/comments`} className='test-item' activeClassName='active-test'>
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
      <Route path={`${path}/description`}>
        Campaign
      </Route>
      <Route path={`${path}/risks`}>
        <Risks risks={risks} />
      </Route>
      <Route path={`${path}/faqs`}>
        <FAQ faqs={faqs} />
      </Route>
      <Route path={`${path}/updates`}>
        <UpdatesComponent project_id={id} />
      </Route>
      <Route path={`${path}/comments`}>
        {comments ? <CommentsSection comments={comments} project_id={id} user={user} /> : 'no comments'}
      </Route>

    </div >
  )
}

export default ProjectPage;
