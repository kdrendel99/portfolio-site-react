import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  background: #ffffff;
  color: #898989;
  font-family: 'Poppins', helvetica;
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.02em;
  overflow-x: hidden;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

h2 {
  color: #292929;
  font-weight: 600;
}

h4 {
  color: #292929;
  font-size: 14px;
  font-weight: 600;
}

a {
  color: #292929;
  text-decoration: none !important;
  transition: all 0.5s ease-in-out 0s;
}

a:hover {
  transition: all 0.5s ease-in-out 0s;
  cursor: pointer;
}

p {
  margin: 25px 0;
  padding: 0;
  font-size: 15px;
  color: #999999;
  line-height: 28px;
}

::-moz-selection {
  background: #b8a07e;
  color: #fff;
}

::selection {
  background: #b8a07e;
  color: #fff;
}

.btn {
  background: #333;
  border: medium none;
  border-radius: 0;
  color: #fff;
  font-size: 12px;
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
  text-transform: uppercase;
}

.btn:hover, .btn:focus {
  color: #fff;
}

.padDiv {
  padding: 30px 20px;
}

.section-title {
  margin-bottom: 70px;
}

.section-title h2 {
  font-size: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.form-control {
  background-color: transparent;
  border: 1px solid #999;
  border-radius: 0;
  color: #999999;
  font-size: 12px;
  font-weight: 500;
  height: 50px;
  letter-spacing: 0.1em;
  padding-left: 10px;
  margin: 0 0 25px 0;
  line-height: 14px;
  text-transform: uppercase;
}

.form-control:focus {
  box-shadow: none;
  outline: 0 none;
}

.paddsection {
  padding-top: 90px;
  padding-bottom: 90px;
}

.paddsections {
  padding-top: 90px;
  padding-bottom: 90px !important;
}

.hvr-shutter-in-horizontal::before {
  background: #333;
}

.hvr-shutter-in-horizontal:hover {
  background: #b8a07e;
}

.mb-30 {
  margin-bottom: 30px;
}

.main-content {
  padding-top: 140px;
}

@media (max-width: 992px) {
  .breadcrumbs {
    padding-top: 100px;
  }
}

@media (max-width: 992px) {
  .breadcrumbs h2 {
    margin: 0 0 10px 0;
  }
}

@media (max-width: 768px) {
  .breadcrumbs .d-flex {
    display: block !important;
  }
  .breadcrumbs ol {
    display: block;
  }
  .breadcrumbs ol li {
    display: inline-block;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* Navbar */
  nav {
    padding: 10px 15px;
  }
  .nav-menu {
    margin-top: 40px;
    display: none;
    float: none;
    width: 100%;
  }
  .nav-menu li {
    float: none;
    width: 100%;
    text-align: center;
    border-top: 1px solid #f7f7f7;
    line-height: 45px;
    margin-left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .responsive {
    float: right;
    padding-top: 15px;
    display: block;
  }
  /* About */
  .head-info .header-content .cmaster h1 {
    font-size: 32px;
  }
  #about .div-img-bg {
    padding: 0;
  }
  #about .div-img-bg .about-img img {
    margin-top: 0%;
    margin-left: calc(0% - 0px);
  }
  #about .about-descr .p-heading {
    font-size: 20px;
  }
  #about .about-descr .separator {
    max-width: 100%;
    margin-bottom: 0;
  }
  /* portfolio */
  #portfolio .portfolio-list .nav li {
    float: none;
    margin: 20px;
    display: inline-block;
  }
  /* journal */
  #journal .journal-block .journal-info {
    margin-bottom: 30px;
  }
  /* Contact */
  .contact-contact {
    margin-bottom: 30px;
  }
  /* Footer */
  #footer .socials-media ul li {
    margin-right: 0;
    margin-left: 0;
    float: none;
    display: inline-block;
  }
}

@media (max-width: 767px) {
  /* Navbar */
  nav {
    padding: 20px 15px;
  }
  .nav-menu {
    margin-top: 40px;
    display: none;
    float: none;
    width: 100%;
  }
  .nav-menu li {
    float: none;
    width: 100%;
    text-align: center;
    border-top: 1px solid #f7f7f7;
    line-height: 45px;
    margin-left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .responsive {
    float: right;
    padding-top: 15px;
    display: block;
  }
  /* About */
  .head-info .header-content h1 {
    font-size: 32px;
  }
  #about .div-img-bg {
    padding: 0;
  }
  #about .div-img-bg .about-img img {
    margin-top: 0%;
    margin-left: calc(0% - 0px);
  }
  #about .about-descr .p-heading {
    font-size: 20px;
  }
  #about .about-descr .separator {
    max-width: 100%;
    margin-bottom: 0;
  }
  /* portfolio */
  #portfolio .portfolio-list .nav li {
    float: none;
    margin: 20px;
    display: inline-block;
  }
  /* journal */
  #journal .journal-block .journal-info {
    margin-bottom: 30px;
  }
  /* Contact */
  .contact-contact {
    margin-bottom: 30px;
  }
  /* Footer */
  #footer .socials-media ul li {
    margin-right: 0;
    margin-left: 0;
    float: none;
    display: inline-block;
  }
}

@media (max-width: 600px) {
  /* Navbar */
  nav {
    padding: 20px 15px;
  }
  .nav-menu {
    margin-top: 40px;
    display: none;
    float: none;
    width: 100%;
  }
  .nav-menu li {
    float: none;
    width: 100%;
    text-align: center;
    border-top: 1px solid #f7f7f7;
    line-height: 45px;
    margin-left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .responsive {
    float: right;
    padding-top: 15px;
    display: block;
  }
  /* About */
  .head-info .header-content h1 {
    font-size: 32px;
  }
  #about .div-img-bg {
    padding: 0;
  }
  #about .div-img-bg .about-img img {
    margin-top: 0%;
    margin-left: calc(0% - 0px);
  }
  #about .about-descr .p-heading {
    font-size: 20px;
  }
  #about .about-descr .separator {
    max-width: 100%;
    margin-bottom: 0;
  }
  /* portfolio */
  #portfolio .portfolio-list .nav li {
    float: none;
    margin: 10px;
    display: inline-block;
  }
  /* journal */
  #journal .journal-block .journal-info {
    margin-bottom: 30px;
  }
  /* Contact */
  .contact-contact {
    margin-bottom: 30px;
  }
  /* Footer */
  #footer .socials-media ul li {
    margin-right: 0;
    margin-left: 0;
    float: none;
    display: inline-block;
  }
}

@media (max-width: 480px) {
  /* Navbar */
  nav {
    padding: 20px 15px;
  }
  .nav-menu {
    margin-top: 40px;
    display: none;
    float: none;
    width: 100%;
  }
  .nav-menu li {
    float: none;
    width: 100%;
    text-align: center;
    border-top: 1px solid #f7f7f7;
    line-height: 45px;
    margin-left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .responsive {
    float: right;
    padding-top: 15px;
    display: block;
  }
  /* About */
  .head-info .header-content h1 {
    font-size: 32px;
  }
  #about .div-img-bg {
    padding: 0;
  }
  #about .div-img-bg .about-img img {
    margin-top: 0%;
    margin-left: calc(0% - 0px);
  }
  #about .about-descr .p-heading {
    font-size: 20px;
  }
  #about .about-descr .separator {
    max-width: 100%;
    margin-bottom: 0;
  }
  /* portfolio */
  #portfolio .portfolio-list .nav li {
    float: none;
    margin: 20px;
  }
  /* journal */
  #journal .journal-block .journal-info {
    margin-bottom: 30px;
  }
  /* Contact */
  .contact-contact {
    margin-bottom: 30px;
  }
  /* Footer */
  #footer .socials-media ul li {
    margin-right: 0;
    margin-left: 0;
    float: none;
    display: inline-block;
  }
}

@media (max-width: 320px) {
  /* Navbar */
  nav {
    padding: 20px 15px;
  }
  .nav-menu {
    margin-top: 40px;
    display: none;
    float: none;
    width: 100%;
  }
  .nav-menu li {
    float: none;
    width: 100%;
    text-align: center;
    border-top: 1px solid #f7f7f7;
    line-height: 45px;
    margin-left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .responsive {
    float: right;
    padding-top: 15px;
    display: block;
  }
  /* About */
  .head-info .header-content h1 {
    font-size: 32px;
  }
  #about .div-img-bg {
    padding: 0;
  }
  #about .div-img-bg .about-img img {
    margin-top: 0%;
    margin-left: calc(0% - 0px);
  }
  #about .about-descr .p-heading {
    font-size: 20px;
  }
  #about .about-descr .separator {
    max-width: 100%;
    margin-bottom: 0;
  }
  /* portfolio */
  #portfolio .portfolio-list .nav li {
    float: none;
    margin: 20px;
  }
  /* journal */
  #journal .journal-block .journal-info {
    margin-bottom: 30px;
  }
  /* Contact */
  .contact-contact {
    margin-bottom: 30px;
  }
  /* Footer */
  #footer .socials-media ul li {
    margin-right: 0;
    margin-left: 0;
    float: none;
    display: inline-block;
  }
}

`;

export default GlobalStyle;