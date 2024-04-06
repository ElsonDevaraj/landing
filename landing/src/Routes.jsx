import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HomeOne from "pages/HomeOne";
import HomeTwo from "pages/HomeTwo";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "homeone",
      element: <HomeOne />,
    },
    {
      path: "hometwo",
      element: <HomeTwo />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
