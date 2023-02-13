import React from 'react';
import ReactDOM from 'react-dom/client';

import Redirect from './routes/Redirect';
import Signin from './routes/Signin';
import Login from './routes/Login';
import Profile from './routes/Profile';
import NewQR from './routes/NewQR';

import { Provider } from 'react-redux';
import store from './store';

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

  {
    path: '/new',
    element: <NewQR />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
