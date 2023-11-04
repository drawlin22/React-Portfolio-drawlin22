import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from '../App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/ContactPage';

const router = createBrowserRouter([
    {path: '/', 
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            index: true, 
        element: <HomePage/>,
    },
        {
            path: '/about',
        element: <AboutPage/>,
    },
        {
            path: '/contact',
        element: <Contact/>,
    },
    ],
},
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );