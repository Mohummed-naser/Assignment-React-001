import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Layout from "./Components/Layout/Layout";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
let rout = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={rout}></RouterProvider>
    </>
  );
}

export default App;
