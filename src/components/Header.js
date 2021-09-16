import React from "react";
import 'bootstrap';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
          {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
          
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
