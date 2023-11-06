import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from '../App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/resume';

const router = createBrowserRouter([
    {path: '/', 
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            index: true, 
        element: <AboutPage/>,
    },
        {
            path: '/contact',
        element: <ContactPage/>,
    },
    {
        path: '/portfolio',
    element: <WorkPage/>,
},
{
    path: '/resume',
element: <ResumePage/>,
},
    ],
},
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );