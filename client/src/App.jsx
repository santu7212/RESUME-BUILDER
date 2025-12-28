import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import Preview from "./pages/Preview";
import ResumeBuilder from "./pages/ResumeBuilder";
import { useDispatch } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
     
      {
        path: "app",
        element: <Layout/>,
        children: [
          { index: true, element: <Dashboard/> },
          { path: "resume-builder/:resumeID", element: <ResumeBuilder /> },
        ],
      },
    ],
  },
  { path: "view/:resumeID", element: <Preview /> },
 
]);

const App = () => {
  const dispatch=useDispatch()
  const getUserData=async()=>{
    const token=localStorage.getItem("token")
    try {
      if(token){
        const {data}=await 
      }
      
    } catch (error) {
      
    }
  }
  return <RouterProvider router={router} />;
};

export default App;
