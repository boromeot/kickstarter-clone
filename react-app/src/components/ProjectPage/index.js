import React, { useEffect } from 'react';
import './ProjectPage.css'
import * as projectAction from '../../store/project';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

const ProjectPage = () => {
  const { projectId } = useParams();
  // const project = useSelector(state => state.project)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectAction.getProject(projectId))
  }, [dispatch, projectId])

  return (
    <>
      <div id='project-header'>
        <h1>Project title</h1>
        <p>Project description</p>
      </div>
    </>
  )
}

export default ProjectPage;
