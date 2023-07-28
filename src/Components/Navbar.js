import React, { useState,useEffect } from "react";
import Logo from "../assets/navlogo.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
// import ReorderIcon from "@material-ui/icons/Reorder";
import "./Navbar.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Sign_In from "./pages/Sign_In";
import Registration from "./pages/Registration";
import Career from "./pages/career";

function Navbar() {
  
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 40) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };
  const Layout = () => {
    return (
      <>
        <div className="form">
          <div className="top">
            <Link to="/sign_in"> Sign In </Link>
            <Link to="/ygyu"> | </Link>
            <Link to="/registration"> Register </Link>
          </div>
        </div>
        <div className={hasScrolled ? 'scrolled navbar' : 'navbar'}>
          <div className="leftSide" >
            <div className="logo">
              <img src={Logo} />
            </div>

            <div className="hiddenLinks">
              <Link to="/"> Home </Link>
              <Link to="/menu"> Menu </Link>
              <Link to="/about"> About </Link>
              <Link to="/contact"> Contact </Link>
            </div>
          </div>
          <div className="rightSide">
            <Link to="/"> Home </Link>
            <Link to="/about"> About Us </Link>
            <Link to="/menu"> Products & Services </Link>
            <Link to="/career"> Careers </Link>
            <Link to="/contact"> Contact Us </Link>
            <button id="bt" ></button>
          </div>
        </div>

        <Outlet />
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sign_in" element={<Sign_In />} />
          <Route path="/registration" element={<Registration />} />
          <Route path ="/career" element={<Career/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
