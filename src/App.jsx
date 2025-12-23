import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import BlogDetails from "./Pages/BlogDetails";
import Layout from "./Pages/Layout";
import ErrorPage from "./Pages/ErrorPage";

let router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      ErrorBoundary: ErrorPage,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "/blog/:id",
          Component: BlogDetails,
        },
      ],
    },
  ],
  {
    basename: "/blog-app",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
