const elSelector = (el, all = false) => {
  el = el.trim();
  if (all) {
    console.log(el + ' = select all true');
    return [...document.querySelectorAll(el)];
} else {
    console.log(el + ' = select all false');
    return document.querySelector(el);
  }
}

const addEvListen = (type, el, listener, all = false) => {
  let selectEl = elSelector(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener));
      console.log(el + ' = on all true');
    } else {
      selectEl.addEventListener(type, listener);
      console.log(el + ' = on all false');
    }
  }
}

const scrollto = (el) => {
  let header = elSelector('#header');
  let offset = header.offsetHeight;

  if (!header.classList.contains('header-scrolled')) {
    offset -= 16;
  }

  let elementPos = elSelector(el).offsetTop;
  window.scrollTo({
    top: elementPos - offset,
    behavior: 'smooth'
  })
}


const toggleDropdown = () => {
  setDropdown(!dropdown);

  if ({dropdown}){
    // Mobile nav toggle 
  
    elSelector('#navbar').classList.toggle('navbar-mobile');
    elSelector('#navbar').classList.toggle('bi-list');
    elSelector('#navbar').classList.toggle('bi-x');
  
  
    // Mobile nav dropdowns activate 

    addEvListen('click', '.navbar .dropdown > a', function(e) {
      if (elSelector('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle('dropdown-active');
      }
    }, true);
  
    // Easy on scroll event listener 
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener);
    }
  
  
    // Scroll with offset on links with a class name .scrollto
  
    addEvListen('click', '.scrollto', function(e) {
    if (elSelector(this.hash)) {
      e.preventDefault();
  
      let navbar = elSelector('#navbar');
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile');
        let navbarToggle = elSelector('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }
      scrollto(this.hash);
    }
    }, true);
  }  
}



FOOTER: 
<div id="footer" class="text-center">
    <div class="container">
      <div class="socials-media text-center">

        <ul class="list-unstyled">
          {/* <!-- <li><a href="#"><i class="bi bi-facebook"></i></a></li> --> */}
          <li><a href="https://www.instagram.com/k.drendel/"><i class="bi bi-instagram"></i></a></li>
          <li><a href="https://www.linkedin.com/in/karlson-drendel/"><i class="bi bi-linkedin"></i></a></li>
          <li><a href="https://github.com/kdrendel99"><i class="fab fa-github-square"></i></a></li>
        </ul>

      </div>

      <div class="credits">
        Designed by Karlson Drendel</a>
      </div>
    </div>
  </div>

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>




  //WORKING HEADER DROPDOWN CODE:
  import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import * as c from './../actions/ActionTypes';



function Header(props){
  const [dropdown, setDropdown] = React.useState(false);

  useEffect(() => console.log(dropdown));
  let dropdownVisible = useEffect(() => dropdown);

  const resetSelected = () => {
    clearProj();
    clearJourn();
  }

  const clearProj = () => {
    const { dispatch } = props;
    const action = {
      type: c.REMOVE_SELECTED_PROJECT
    }
    dispatch(action);
  }

  const clearJourn = () => {
    const { dispatch } = props;
    const action = {
      type: c.REMOVE_SELECTED_JOURNAL
    }
    dispatch(action);
  }

  // const dropDownStyle = {
  //     color: "green",
  // }

  const elSelector = (el, all = false) => {
    el = el.trim();
    if (all) {
      console.log(el + ' = select all true');
      return [...document.querySelectorAll(el)];
  } else {
      console.log(el + ' = select all false');
      return document.querySelector(el);
    }
  }
  
  const addEvListen = (type, el, listener, all = false) => {
    let selectEl = elSelector(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
        console.log(el + ' = on all true');
      } else {
        selectEl.addEventListener(type, listener);
        console.log(el + ' = on all false');
      }
    }
  }
  
  const scrollto = (el) => {
    let header = elSelector('#header');
    let offset = header.offsetHeight;
  
    if (!header.classList.contains('header-scrolled')) {
      offset -= 16;
    }
  
    let elementPos = elSelector(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }


  const toggleDropdown = () => {
    setDropdown(!dropdown);

    if ({dropdown}){
      // Mobile nav toggle 
    
      elSelector('#navbar').classList.toggle('navbar-mobile');
      elSelector('#navbar').classList.toggle('bi-list');
      elSelector('#navbar').classList.toggle('bi-x');
    
    
      // Mobile nav dropdowns activate 

      addEvListen('click', '.navbar .dropdown > a', function(e) {
        if (elSelector('#navbar').classList.contains('navbar-mobile')) {
          e.preventDefault();
          this.nextElementSibling.classList.toggle('dropdown-active');
        }
      }, true);
    
      // Easy on scroll event listener 
      const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener);
      }
    
    
      // Scroll with offset on links with a class name .scrollto
    
      addEvListen('click', '.scrollto', function(e) {
      if (elSelector(this.hash)) {
        e.preventDefault();
    
        let navbar = elSelector('#navbar');
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile');
          let navbarToggle = elSelector('.mobile-nav-toggle');
          navbarToggle.classList.toggle('bi-list');
          navbarToggle.classList.toggle('bi-x');
        }
        scrollto(this.hash);
      }
      }, true);
    }  
  }


  
  return (
    <React.Fragment>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-between">

          <h1 className="logo"><a href="index.html">Karlson Drendel</a></h1>
          <nav id="navbar" className="navbar">
            <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">About</a></li>
                <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
                <li><a className="nav-link scrollto" href="#journal">Blog</a></li>
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" onClick = {() => toggleDropdown()}></i>
            {/* <Dropdown /> */}
          </nav>
        </div> 
      </header>  
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    selectedJourn: state.selectedJourn
  }
}

Header = connect(mapStateToProps)(Header);

export default Header;
