import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import Preview from "./pages/Preview";
import ResumeBuilder from "./pages/ResumeBuilder";

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
  { path: "preview:resumeID", element: <Preview /> },
  { path: "login", element: <Login /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
