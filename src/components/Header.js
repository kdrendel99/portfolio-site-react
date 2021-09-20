import React from "react";
import { connect } from 'react-redux';
import * as c from './../actions/ActionTypes';

function Header(props){
  const [dropdown, setDropdown] = React.useState(false);
  const toggleOpen = () => setDropdown(!dropdown);

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

  return (
    <React.Fragment>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-between">

          <h1 className="logo"><a href="index.html">Karlson Drendel</a></h1>
          <nav id="navbar" className="navbar">
            <ul>
                <li><a onClick = {() => resetSelected()} className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a onClick = {() => resetSelected()} className="nav-link scrollto" href="#about">About</a></li>
                <li><a onClick = {() => resetSelected()} className="nav-link  scrollto" href="#portfolio">Portfolio</a></li>
                <li><a onClick = {() => resetSelected()} className="nav-link  scrollto" href="#journal">Blog</a></li>
                <li><a onClick = {() => resetSelected()} className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" 
            // style={dropDownStyle}
            onClick = {() => toggleOpen()}></i>
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
