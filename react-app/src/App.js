import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import ProjectPage from './components/ProjectPage';
import UpdatesView from './components/UpdatesView';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CreateProjectPage from './components/CreateProjectPage';
import IndividualTagPage from './components/IndividualTagPage';
import Discover from './components/Discover';
import EditProjectPage from './components/EditProjectPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const tags = useSelector(state => Object.values(state.tags));
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());

      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/projects/:projectId/edit'>
          <EditProjectPage />
        </Route>
        <Route path='/login' exact={true}>
          <Navigation />
          <LoginForm />
          <Footer />
        </Route>
        <Route path='/sign-up' exact={true}>
          <Navigation />
          <SignUpForm />
          <Footer />
        </Route>
        <Route path='/' exact={true} >
          <Navigation />
          <h1>My Home Page</h1>
          <Footer />
        </Route>
        <Route path='/projects/:projectId' >
          <Navigation />
          <ProjectPage />
          <Footer />
        </Route>
        <Route path='/updates'>
          <Navigation />
          <UpdatesView />
          <Footer />
        </Route>
        <Route path='/start'>
          <Navigation />
          <CreateProjectPage />
          <Footer />
        </Route>
        <Route path='/discover'>
          <Navigation />
          <Discover />
          <Footer />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
