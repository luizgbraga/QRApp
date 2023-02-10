import React from 'react';
import ReactDOM from 'react-dom/client';

import Redirect from './routes/Redirect';
import Signin from './routes/Signin';
import Login from './routes/Login';
import Profile from './routes/Profile';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/redirect',
    element: <Redirect />
  },

  {
    path: '/signin',
    element: <Signin />
  },

  {
    path: '/login',
    element: <Login />
  },

  {
    path: '/profile',
    element: <Profile />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
