import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const CreateProjectPage = () => {
  const user = useSelector(state => state.session.user);

  if (!user) {
    return <Redirect to='/login' />
  }

  return 'Hello from create project';
}

export default CreateProjectPage;
