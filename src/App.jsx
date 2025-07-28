import './App.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Layout from './Layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Search from './pages/Search'
import Users from './pages/Users'
import UserById from './pages/UserById'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


function App() {
   useEffect(() => {
    AOS.init({
      duration: 800,      
      once: true,         
      offset: 100,        
    });
  }, []);
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>,
      },
      {
          path:"services",
          element:<Services/>,
      },
      {
          path:"search",
          element:<Search/>,
      },
      {
          path:"users",
          element:<Users/>,
      },
      {
          path:"userById",
          element:<UserById/>,
      },
    ],
  },
]);
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
