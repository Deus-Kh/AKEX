// import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import React, { useState, useEffect } from 'react';
import Preloader from './pages/Preloader';
import './styles/main.module.css'


function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 200); 
  }, []);
  return (
    <>
    {loading?(<Preloader />): <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>}
    </>
  );
}

export default App;
