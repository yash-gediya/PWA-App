import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const Layout = () => {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
