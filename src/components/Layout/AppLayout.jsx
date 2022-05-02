import { Outlet } from "react-router-dom"
import Sidebar2 from "../Sidebar2/Sidebar2";
import React from 'react';

const AppLayout = () => {
  return <div style={{
    padding: '0px 0px 0px 318px'
  }}>
    <Sidebar2/>
    <Outlet/>
  </div>;
};

export default AppLayout;
