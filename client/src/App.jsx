import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import Preview from "./pages/Preview";
import ResumeBuilder from "./pages/ResumeBuilder";
import { useDispatch } from "react-redux";
import api from "./configs/api.js";
import { login, setLoading } from "./app/features/authSlice.js";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "app",
        element: <Layout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "resume-builder/:resumeID", element: <ResumeBuilder /> },
        ],
      },
    ],
  },
  { path: "view/:resumeID", element: <Preview /> },
]);

const App = () => {
  const dispatch = useDispatch();
  const getUserData = async () => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const { data } = await api.get("/api/user/user-data", {
          headers: { Authorization: token },
        });
        if (data.user) {
          dispatch(login({ token, user: data.user }));
        }
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error.message);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
