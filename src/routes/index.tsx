import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout.tsx";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import Experience from "../pages/Experience.tsx";
import Contact from "../pages/Contact.tsx";
import ToolBox from "../pages/Toolbox.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/tools",
        element: <ToolBox />,
      },
    ],
  },
]);
