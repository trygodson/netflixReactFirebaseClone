import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import * as ROUTES from './constants/routes'
import {Home, SignIn, SignUp, Browse} from './pages';
import {IsUserRedirect, ProtectedRoute} from './helpers/userRedirectRoutes';
import {UseAuthListener} from './hooks/index'

export default function App() {
  const {user} = UseAuthListener();

  return (
    <Router>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path='/signin' >
        <SignIn/>
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path='/signup' >
        <SignUp/>
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path='/' exact>      
        <Home/>
      </IsUserRedirect>
      <ProtectedRoute user={user} path='/browse'>
        <Browse/>
      </ProtectedRoute>

   </Router>
  );
}
