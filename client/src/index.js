import React from 'react';
import ReactDOM from 'react-dom/client';

import Landing from './routes/Landing';
import Redirect from './routes/Redirect';
import Signin from './routes/Signin';
import Login from './routes/Login';
import Profile from './routes/Profile';
import NewQR from './routes/NewQR';
import QR from './routes/QR';
import Home from './routes/Home';

import Plans from './routes/Plans';
import AboutUs from './routes/AboutUs';
import Support from './routes/Support';

import { Provider } from 'react-redux';
import store from './store';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import './assets/styles/Global/global.css';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Landing />
  },

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

  {
    path: '/qr',
    element: <QR />
  },

  {
    path: '/home',
    element: <Home />
  },

  {
    path: '/plans',
    element: <Plans />
  },

  {
    path: '/aboutus',
    element: <AboutUs />
  },

  {
    path: '/support',
    element: <Support />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
