import React from 'react';
import ReactDOM from 'react-dom/client';

import Landing from './routes/Landing';
import Redirect from './routes/Redirect';
import Signin from './routes/Signin';
import Login from './routes/Login';
import Profile from './routes/Profile';
import QR from './routes/QR';
import Home from './routes/Home';
import Checkout from './routes/Checkout';

import Plans from './routes/Plans';
import AboutUs from './routes/AboutUs';
import Support from './routes/Support';

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
    path: '/home',
    element: <Home />
  },

  {
    path: '/login',
    element: <Login />
  },

  {
    path: '/signin',
    element: <Signin />
  },

  {
    path: '/profile',
    element: <Profile />
  },

  {
    path: '/redirect/:id',
    element: <Redirect />
  },

  {
    path: '/qr',
    element: <QR />
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
  },

  {
    path: '/checkout',
    element: <Checkout />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
