import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Users from "../components/Users";
import Layout from "../pages/Layout";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/users"} element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
