import { createBrowserRouter, RouteObject } from "react-router-dom";
import Error from "../pages/error/Error";

import Home from "../pages/home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

export default routes;
