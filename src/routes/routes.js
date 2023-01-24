import Root from "./root";
import ErrorPage from "../routes/error";
import Input from "../pages/Inputs";
import Home from "../pages/Home/Home";

import {createBrowserRouter} from 'react-router-dom'
import Buttons from "../components/buttons/Buttons";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/inputs",
        element: <Input />,
      },
      {
        path: "/buttons",
        element: <Buttons />
      }
    ],
  },
]);

export default router;