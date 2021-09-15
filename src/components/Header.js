import React from "react";
import 'bootstrap';
// import alaska from "./../img/alaska.jpg";

function Header(){
  return (
    <React.Fragment>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-between">

          <h1 className="logo"><a href="index.html">Karlson Drendel</a></h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link  scrollto" href="#portfolio">Portfolio</a></li>
              <li><a className="nav-link  scrollto" href="#journal">Blog</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
