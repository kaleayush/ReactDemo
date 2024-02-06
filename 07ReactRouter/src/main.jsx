import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Github, { GithubInfo } from "./Component/Github/Github.jsx";

import { Home, About, Contact, Product, Layout } from "./index.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/About",
//         element: <About />,
//       },
//       {
//         path: "/ContactUs",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route loader={GithubInfo} path="/Github" element={<Github />} />
      <Route
        path="/Product/:ProductNo/:ProductName/:isActive"
        element={<Product />}
      />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
