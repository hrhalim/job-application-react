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
import ApplyJobs from './components/ApplyJobs/ApplyJobs';
import ErrorPage from './components/ErrorPage/ErrorPage'
import {cartProductsLoader} from './Utilise/cartProductsLoader';

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
        path:'job/:jobId',
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`/featuredJob.json`)
      },
      {
        path:'statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'applied-jobs',
        element: <ApplyJobs></ApplyJobs>,
        loader: cartProductsLoader
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <ErrorPage/>
      }
      
    ]

  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
