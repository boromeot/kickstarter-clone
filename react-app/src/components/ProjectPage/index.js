import React, { useEffect, useState } from 'react';
import './ProjectPage.css'
import { clear_project, getProject } from '../../store/project';
import { useDispatch, useSelector } from 'react-redux';
import { Route, NavLink, useParams, useRouteMatch, useHistory } from 'react-router-dom';
import CommentsSection from '../CommentsSection';
import FAQ from './FAQ';
import FAQListComponent from './FAQListComponent';
import Risks from './Risks';
import Campaign from './Campaign';

import Modal from '../Modal';
import BackerForm from './BackerForm';
import Update from './Update';

const ProjectPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { projectId } = useParams();
  const { user } = useSelector(state => state.session);
  const { id, title, description, campaign, video_src, image_src, current_funding, pledge_goal, faqs, risks, comments, tag, username, user_id, end_date} = useSelector(state => state.project)
  const { path, url } = useRouteMatch(); //Allows for backwards compatibility of route names

  const [show, setShow] = useState(false);

  const [FAQListRender, setFAQListRender] = useState(false)
  const [FAQRender, setFAQRender] = useState(true)
  const [FAQQuestion, setFAQQuestion] = useState("")
  const [FAQAnswer, setFAQAnswer] = useState("")
  const [FAQId, setFAQId] = useState(0)

  const differenceByDays = (date1, date2) => {
    const timeDelta = Math.abs(date2 - date1);
    const dayDelta = Math.ceil(timeDelta / (1000 * 60 * 60 * 24));
    return dayDelta;
  }

  const deleteProject = async e => {
    const response = await fetch(`/api/projects/${projectId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (response.ok) {
      await response.json();
    } else {
      const data = await response.json();
      alert(data.error);
    }
    history.push('/');
  }


  useEffect(() => {
    dispatch(getProject(projectId))
    return () => {
      dispatch(clear_project());
    }
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
              <iframe id='project-video' src={video_src} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
              : <img id='project-image' src={image_src} alt="" />
            }
          </div>
          <div id='project-minor-info'>
            <span>Project we love</span>
            <span>{tag}</span>
            <span>{username}</span>
            {
              user?.id === user_id &&
              <>
                <NavLink to={`/projects/${projectId}/edit/basics`} className='btn-edit project-minor-btn'>Edit</NavLink>
                <button onClick={deleteProject} className='btn-delete project-minor-btn' id='project-delete-btn'>Delete</button>
              </>
            }
          </div>
        </div>
        <div id='project-pledge'>
          <div id='project-progress-bar'>
            <div id='project-progress' style={{ width: `clamp(0%, ${(current_funding / pledge_goal) * 100}%, 100%)` }} />
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
                <span>{differenceByDays(new Date(), new Date(end_date))}</span>
              </div>
              <span className='project-main-info-description'>days to go</span>
            </div>
          </div>
          <div>
            <button className='btn-primary' id='pledge-btn' onClick={() => setShow(true)} disabled={!user}>
              Back this project
            </button>
            <Modal title='Back this project' onClose={() => setShow(false)} show={show}>
              <BackerForm setShow={setShow} project_id={projectId}/>
            </Modal>
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
            <button className='btn-primary test-item-btn' onClick={() => setShow(true)} disabled={!user}>
              Back this project
            </button>
          </div>
        </div>
      </div>
      <Route path={`${path}/description`}>
        <Campaign campaign={campaign} />
      </Route>
      <Route path={`${path}/risks`}>
        <Risks risks={risks} />
      </Route>
      <Route path={`${path}/faqs`}>
        {FAQRender && <FAQ faqs={faqs} setFAQRender={setFAQRender} setFAQListRender={setFAQListRender} setFAQQuestion={setFAQQuestion} setFAQAnswer={setFAQAnswer} setFAQId={setFAQId} FAQId={FAQId} />}
        {FAQListRender && <FAQListComponent setFAQRender={setFAQRender} setFAQListRender={setFAQListRender} FAQQuestion={FAQQuestion} FAQAnswer={FAQAnswer} FAQId={FAQId} />}
      </Route>
      <Route path={`${path}/updates`}>
        <Update />
      </Route>
      <Route path={`${path}/comments`}>
        {comments ?
          <CommentsSection comments={comments} project_id={id} />
          : 'no comments'}
      </Route >

    </div >
  )
}

export default ProjectPage;
