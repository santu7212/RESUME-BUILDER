import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashbord from "./pages/Dashbord";
import Layout from "./pages/Layout";
import Preview from "./pages/Preview";
import ResumeBuilder from "./pages/ResumeBuilder";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/dashboard", element: <Dashbord /> },
      { path: "/layout", element: <Layout /> },
      { path: "/preview", element: <Preview /> },
      { path: "/resume-builder", element: <ResumeBuilder /> },
    ],
  },
]);

const App = () => {
  return  <RouterProvider router={router}/>
};

export default App;
