import React, { useEffect } from 'react';
import './ProjectPage.css'
import * as projectAction from '../../store/project';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

const ProjectPage = () => {
  const { projectId } = useParams();
  const {title, description} = useSelector(state => state.project)
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
        <div id='project-image'>

        </div>
        <div id='project-pledge'>

        </div>
      </div>
    </div>
  )
}

export default ProjectPage;
