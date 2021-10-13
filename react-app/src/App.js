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
import IndividualTagPage from './components/IndividualTagPage';
import Discover from './components/Discover';

function App() {
  const [loaded, setLoaded] = useState(false);
  const tags = useSelector(state => Object.values(state.tag));
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
      <Navigation />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <h1>My Home Page</h1>
        </Route>
        <Route path='/projects/:projectId' >
          <ProjectPage />
        </Route>
        <Route path='/updates'>
          <UpdatesView />
        </Route>
        <Route path='/discover'>
          <Discover />
        </Route>
        {tags.map((tag) =>
          <Route path={`/discover/${tag.title}`}>
            <IndividualTagPage tagId={tag.id} tagTitle={tag.title}/>
          </Route>
        )}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
