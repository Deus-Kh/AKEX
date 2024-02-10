import { Outlet} from "react-router-dom";
// import React, { Component } from 'react'
import  NavBar from "../components/NavBar.js";


const Layout = () => {
  return (
    <>
    <NavBar/>
      <h2>Layout</h2>

      <Outlet />
    </>
  )
};

export default Layout;