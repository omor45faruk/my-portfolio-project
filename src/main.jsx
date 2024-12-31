import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import LayOut from './components/LayOut';
import Resume from './components/Resume';
import Service from './components/Service';
import Education from './components/Education';
import ContactUs from './components/ContactUs';
import NavBer from './components/NavBer';
 
const router = createBrowserRouter([
  {
    path: "/",
    element:<LayOut></LayOut>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
          path:'/about',
          element:<AboutMe></AboutMe>
      },
      {
          path:'/resume',
          element:<Resume></Resume>
      },
      {
          path:'/services',
          element:<Service></Service>
      },
      {
          path:'/skill',
          element: <Education></Education>
      },
      {
          path:'/contact',
          element: <ContactUs></ContactUs>
      },

    ]
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
