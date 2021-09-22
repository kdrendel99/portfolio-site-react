import React, {useEffect} from "react";
import PropTypes from "prop-types";

function Dropdown(props){
    const [dropdown, setDropdown] = React.useState(null);
    const toggleDropdown = () => setDropdown(!dropdown);
    if (dropdown){
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
      
      function toggleDropdown(){
        console.log('dropdown toggled!');
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
        }, true)
      }
    }
  
    // useEffect(() => {
    //   renderImage();
    // })


  return (

    <React.Fragment>
      <i className="bi bi-list mobile-nav-toggle" onClick = {() => toggleDropdown()}></i>
    </React.Fragment>
  );
}

Dropdown.propTypes = {
  resetSelectedJourn: PropTypes.func
};

export default Dropdown;