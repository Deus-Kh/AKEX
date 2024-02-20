import { Outlet } from "react-router-dom";
import React from 'react'
import NavBar from "../components/NavBar.js";
import Background from "../components/Background.js";



const Layout = () => {

  return (
    <>

      <Background />
      <NavBar />


      <Outlet />

    </>
  )
};

export default Layout;