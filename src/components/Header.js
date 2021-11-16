import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import * as c from './../actions/ActionTypes';
import navAnimations from '../navbar/navbar';
// import './../navbar/navbar.css';

function Header(props){
  const [dropdown, setDropdown] = React.useState(false);
  const [navbarAnimations] = React.useState(true);
  const [active, setActive] = React.useState(null);
  const [navbarClicked] = React.useState(props.navClicked)
  const [scrollActive, setScrollActive] = React.useState(false);
  // const [scrollActive, setScrollActive] = React.useState(!props.navClicked);

  //prevent dropdown from initially changing to true
  const [dropdownInitial, setDropdownInitial] = React.useState(false)

  const useFocus = () => {
    const dropdownRef = useRef(null)
    const setFocus = () => {dropdownRef.current && dropdownRef.current.focus()}
    
    return [ dropdownRef, setFocus ]
  }

  const [dropdownLoaded, setDropdownLoaded] = useFocus();


  useEffect(() => {
    if(navbarAnimations){
      if (navbarAnimations){
        navAnimations();
      }
    }
  })

  const toggleDropdown = () => {
    let currentlyLoadedDropdown = `${dropdownLoaded.current.className}`;
    currentlyLoadedDropdown = '.' + currentlyLoadedDropdown.substring(11);
    const navbar = document.querySelector('#navbar');
    let dropdownIcon = document.querySelector('.mobile-nav-toggle')

      navbar.classList.toggle('navbar-mobile')
      dropdownIcon.classList.toggle('bi-list')
      dropdownIcon.classList.toggle('bi-x')
  }

  useEffect(() => {
    //Only runs on the first load. Prevents initial load from toggling dropdown to true.
    if (!dropdownInitial){
      setDropdownInitial(true);
      return
    } 
    else if (dropdownInitial){
      toggleDropdown()
    }
  }, [dropdown])

  function removeCurrentActiveColor(id){
    const previousNavLink = document.getElementById(id)
    if (previousNavLink) previousNavLink.classList.remove('active')
  }

  function addCurrentActiveColor(id){
    const newNavLink = document.getElementById(id)
    if (newNavLink) newNavLink.classList.add('active')
  }

  const resetSelected = (id) => {
    document.removeEventListener('scroll', navbarlinksActive);
    toggleNavClick(id)
    clearProj();
    clearJourn();
    setDropdown(false);
    history.push("/")
  }

  function setNavbar(id){
      const { dispatch } = props;
      const action = {
        type: c.ADD_SELECTED_NAV,
        id: id
      }
    dispatch(action);
  }

    function toggleNavClick(id){
    // removeCurrentActiveColor(active)
      const { dispatch } = props;
      const action = {
        type: c.TOGGLE_NAV_CLICK,
        id: id
      }
    dispatch(action);
  }

  useEffect(() => {
    removeCurrentActiveColor(active)
  },[active, props.selectedNav])

  useEffect(() => {
    if (props.selectedNav !== null || props.selectedNav !== undefined){
      setActive(props.selectedNav)
      addCurrentActiveColor(props.selectedNav)
    } 
  })

  useEffect(() => {
    if (props.navClicked){
      const scrollTo = [...[active]].toString()
      if (scrollTo !== null || scrollTo !== undefined) scrollToActive(scrollTo)
    } else if (!props.navClicked) setScrollActive(true)
  },[active])

  function scrollToActive(scrollId){
    const selectedId = scrollId.substring(1)
    const element = document.getElementById(selectedId)
    if (element !== null){
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    toggleNavClick(null)
    document.addEventListener('scroll', navbarlinksActive)
    setScrollActive(true)
  }

  function navbarlinksActive(){
    // let position = window.scrollY + 200
    let position = window.scrollY + 400
    const navlinks = [...document.querySelectorAll('#navbar .scrollto')]
    navlinks.forEach(navbarlink => {
      let section = document.getElementById(navbarlink.id.substring(1))
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        setNavbar(navbarlink.id)
      } 
    })
    return
  }

  useEffect(() => {
    if (!scrollActive){
      return
    } else if (scrollActive){
      navbarlinksActive()
      document.addEventListener('scroll', navbarlinksActive)
    } return () => {
      document.removeEventListener('scroll', navbarlinksActive);
    }
  },[scrollActive])

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

  const [ locationKeys, setLocationKeys ] = React.useState([])
  const history = useHistory()
  
  useEffect(() => {
    return history.listen(location => {
      if (history.action === 'PUSH') {
        setLocationKeys([ location.key ])
      }
  
      if (history.action === 'POP') {
        history.push("/")
        resetSelected()
      }
    })
  }, [ locationKeys, ])
  
  return (
    {dropdown},
    <React.Fragment>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-between">

          <h1 className="logo"><a>Karlson Drendel</a></h1>
          <nav id="navbar" className="navbar" >
            <ul>
              <li><a onClick = {() => resetSelected('_hero')} className="nav-link scrollto" id="_hero">Home</a></li>
              <li><a onClick = {() => resetSelected('_about')} className="nav-link scrollto" id="_about">About</a></li>
              <li><a onClick = {() => resetSelected('_portfolio')} className="nav-link scrollto" id="_portfolio">Portfolio</a></li>
              <li><a onClick = {() => resetSelected('_journal')} className="nav-link scrollto" id="_journal">Blog</a></li>
              <li><a onClick = {() => resetSelected('_contact')} className="nav-link scrollto" id="_contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" ref={dropdownLoaded} onLoad={setDropdownLoaded} onClick = {() => setDropdown(!dropdown)}></i>
          </nav>
        </div> 
      </header>  
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    selectedJourn: state.selectedJourn,
    selectedProj: state.selectedProj,
    selectedNav: state.selectedNav,
    navClicked: state.navClicked
  }
}

Header = connect(mapStateToProps)(Header);

export default Header;