// import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import React, { Suspense } from 'react';
import Preloader from './pages/Preloader';


function App() {
  // const [loading, setLoading] = useState(!window.onload)
  
  // useEffect(()=>{
  //   setLoading(window.onload); 
  // },[])
  
  return (
    <>
    <Suspense fallback={<Preloader/>}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Suspense>
    </>
  );
}

export default App;
