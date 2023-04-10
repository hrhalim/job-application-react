import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import Home from './components/Home/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import JobDetails from './components/JobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'jobdetail:/jobdetailId',
        element: <JobDetails></JobDetails>
      },
      {
        path:'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]

  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
