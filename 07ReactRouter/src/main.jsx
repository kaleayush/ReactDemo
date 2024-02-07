import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
//
import {
  Home,
  About,
  Contact,
  Product,
  Layout,
  Downloadcmp,
  Github,
  GithubInfo,
} from "./index.jsx";

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
      <Route path="/" element={<Home />}>
        <Route path="Home/Download" element={<Downloadcmp />} />
      </Route>
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />}> 
        <Route path="/Contact/:name/:email/:tel" element={<>hellow</>}></Route>
      </Route>
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
