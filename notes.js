
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

/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  background: #b8a07e;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  transition: all 0.4s;
}

.back-to-top i {
  font-size: 28px;
  color: #fff;
  line-height: 0;
}

.back-to-top:hover {
  background: #c6b398;
  color: #fff;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}


/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/




/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/





/*--------------------------------------------------------------
# Hero
--------------------------------------------------------------*/
#hero {
  background: url("./img/alaska-woods.jpg") repeat scroll center center/cover;
  height: 100vh;
  width: 100%;
}

#hero .hero-content {
  height: 100vh;
  text-align: left;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.hero-content h1 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #fff;
}

.hero-content p {
  font-size: 13px;
  letter-spacing: 3px;
  margin-top: 0;
  margin-bottom: 30px;
  text-transform: capitalize;
  color: #fff;
  font-weight: 500;
}

.hero-content .list-social li {
  float: left;
  margin-right: 20px;
}

.hero-content .list-social li i {
  color: #fff;
  font-size: 15px;
}

/*--------------------------------------------------------------
# Breadcrumbs
--------------------------------------------------------------*/
.breadcrumbs {
  padding: 120px 0 0 0;
  background-color: white;
  min-height: 40px;

  /* color: #898989;
  font-family: "Poppins", helvetica;
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.02em; */
}

@media (max-width: 992px) {
  .breadcrumbs {
    padding-top: 100px;
  }
}

.breadcrumbs h2 {
  font-size: 24px;
  font-weight: 300;
  margin: 0;
}

@media (max-width: 992px) {
  .breadcrumbs h2 {
    margin: 0 0 10px 0;
  }
}

.breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
}

.breadcrumbs ol li + li {
  padding-left: 10px;
}

.breadcrumbs ol li + li::before {
  display: inline-block;
  padding-right: 10px;
  color: #6c757d;
  content: "/";
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

/*-----------------------------------------------------------------------------------*/
/*  About
/*-----------------------------------------------------------------------------------*/
#about {
  width: 100%;
  height: auto;
  background: #f7f7f7;
  padding-top: 120px;
}

#about .div-img-bg {
  padding-bottom: 30px;
  border: 20px solid #b8a07e;
}

#about .div-img-bg .about-img img {
  width: 100%;
  box-shadow: 0px 0px 85px 0px rgba(0, 0, 0, 0.14);
  margin-top: -60px;
  margin-left: 40px;
  height: 400px;
  -o-object-fit: cover;
  object-fit: cover;
}

/* #about .about-descr .p-heading {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  text-align: left;
}

#about .about-descr .separator {
  max-width: 80%;
  margin-bottom: 0;
  text-align: left;
} */

/* ========================= */
.aboutId, .about-descr .p-heading {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  text-align: left;
}

.aboutId , .about-descr .separator {
  max-width: 80%;
  margin-bottom: 0;
  text-align: left;
}

/*--------------------------------------------------------------
# Services
--------------------------------------------------------------*/
#services {
  background: #f7f7f7;
  position: relative;
  padding-bottom: 80px;
}

.services-block span {
  margin: 10px 0;
  position: relative;
  font-size: 13px;
  color: #292929;
  letter-spacing: 0.1em;
  font-weight: 500;
  text-transform: uppercase;
  display: block;
}

.services-block .separator {
  margin: 0;
  font-size: 13px;
  line-height: 22px;
}

.services-block i {
  font-size: 44px;
  color: #b8a07e;
  line-height: 44px;
}

.services-slider .swiper-pagination {
  margin-top: 30px;
  position: relative;
}

.services-slider .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid #b8a07e;
}

.services-slider .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #b8a07e;
}

/*--------------------------------------------------------------
# Portfolio
--------------------------------------------------------------*/
#portfolio {
  position: relative;
  padding-bottom: 50px;
}

#portfolio #portfolio-flters {
  padding: 0;
  margin: 0 auto 35px auto;
  list-style: none;
  text-align: center;
  border-radius: 50px;
  padding: 2px 15px;
}

#portfolio #portfolio-flters li {
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px 8px 15px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  color: #999999;
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;
}

#portfolio #portfolio-flters li:hover, #portfolio #portfolio-flters li.filter-active {
  color: #b8a07e;
}

#portfolio #portfolio-flters li:last-child {
  margin-right: 0;
}

#portfolio .portfolio-item {
  margin-bottom: 30px;
}

.portfolioId {
  color: #898989;
  font-family: "Poppins", helvetica;
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.02em;
}

#portfolio .portfolio-item .portfolio-info {
  opacity: 0;
  position: absolute;
  left: 30px;
  right: 30px;
  bottom: 0;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;
}

#portfolio .portfolio-item .portfolio-info h4 {
  font-size: 18px;
  color: #666;
  font-weight: 600;
  margin-bottom: 10px;
}

#portfolio .portfolio-item .portfolio-info p {
  color: #999;
  font-size: 14px;
  margin: 0;
  padding: 0;
}

#portfolio .portfolio-item .portfolio-info .preview-link, #portfolio .portfolio-item .portfolio-info .details-link {
  position: absolute;
  right: 40px;
  font-size: 24px;
  top: calc(50% - 18px);
  color: #b8a07e;
}

#portfolio .portfolio-item .portfolio-info .preview-link:hover, #portfolio .portfolio-item .portfolio-info .details-link:hover {
  color: #cab89f;
}

#portfolio .portfolio-item .portfolio-info .details-link {
  right: 10px;
}

#portfolio .portfolio-item:hover .portfolio-info {
  opacity: 1;
  bottom: 20px;
}

/*--------------------------------------------------------------
# Portfolio Details
--------------------------------------------------------------*/
.portfolio-details {
  padding-top: 40px;
}

.portfolio-details .portfolio-details-slider img {
  width: 100%;
}

.portfolio-details .portfolio-details-slider .swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid #b8a07e;
}

.portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #b8a07e;
}

.portfolio-details .portfolio-info {
  padding: 30px;
  box-shadow: 0px 0 30px rgba(75, 74, 74, 0.08);
}

.portfolio-details .portfolio-info h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.portfolio-details .portfolio-info ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}

.portfolio-details .portfolio-info ul li + li {
  margin-top: 10px;
}

.portfolio-details .portfolio-description {
  padding-top: 30px;
}

.portfolio-details .portfolio-description h2 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}

.portfolio-details .portfolio-description p {
  padding: 0;
}

/*--------------------------------------------------------------
# Journal
--------------------------------------------------------------*/
/* body > #portfolio-details {
  color: #898989;
  font-family: "Poppins", helvetica;
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.02em;
} */

#journal, #journal-blog {
  height: auto;
  width: 100%;
  background: #f7f7f7;
  padding-bottom: 60px;
  position: relative;
}

#journal-blog {
  background: #fff;
  padding-bottom: 30px;
}

#journal .journal-block {
  display: inline-block;
  height: auto;
  width: 100%;
}

#journal .journal-block .journal-info {
  position: relative;
}

.journal-block .journal-info img {
  max-width: 100%;
}

.journal-block .journal-info .journal-txt {
  padding: 25px 0px;
  position: relative;
}

.journal-block .journal-info .journal-txt h4 a {
  display: block;
  font-size: 19px;
  line-height: 24px;
  margin: 0 0 13px 0;
  font-weight: 500;
  color: #292929;
  transition: all 0.5s ease-in-out 0s;
}

.journal-block .journal-info .journal-txt h4 a:hover {
  color: #b8a07e;
  transition: all 0.5s ease-in-out 0s;
}

.journal-block .journal-info .journal-txt p {
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  font-family: "Poppins", helvetica;
  font-weight: 300;
  letter-spacing: 0..2em;
}

.journal-image {
  max-width: 100%;
  max-height: 100%;
  margin: 0px auto;
  margin-top: 0px;
}

/* .main .journal-image{
  position: calc(-50%) center;
} */

/*--------------------------------------------------------------
# Journal
--------------------------------------------------------------*/
#contact {
  height: auto;
  width: 100%;
}

.contact-details {
  list-style: none;
  margin: 0;
  padding: 0;
}

.contact-details li {
  padding-bottom: 10px;
  color: #898989;
  font-family: "Poppins", helvetica;
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.02em;
}

/* .contact-details a{
  text-decoration: underline !important;
  color: #292929;
  transition: all 0.5s ease-in-out 0s;
}
.contact-details a:hover{
  text-decoration: underline !important;
  color: #b8a07e;
  transition: all 0.5s ease-in-out 0s;
} */

#contact input, #contact textarea {
  width: 100%;
  margin-bottom: 5px;
}

#contact textarea {
  min-height: 160px;
}

.php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  margin-bottom: 15px;
  font-weight: 600;
}

.php-email-form .error-message br + br {
  margin-top: 25px;
}

.php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

.php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
  margin-bottom: 15px;
}

.php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/*--------------------------------------------------------------
# Blog
--------------------------------------------------------------*/
/*  Navbar fixd page */
.subpage-nav {
  display: block !important;
}

/*-----------------------------------------------------------------------------------*/
/*  /* Single page */
/*-----------------------------------------------------------------------------------*/
#journal-blog {
  padding-top: 140px;
}

/* main content */
.main-content {
  background: #f7f7f7;
}

.main-content .container-main {
  display: inline-block;
  width: 100%;
}

.main-content .container-main .block-main {
  margin-bottom: 30px;
  overflow: hidden;
}

.container-main .block-main .content-main {
  background: #fff none repeat scroll 0 0;
  display: inline-block;
  width: 100%;
}

.journal-txt h4 a {
  display: block;
  font-size: 19px;
  line-height: 24px;
  margin: 0 0 13px 0;
  font-weight: 500;
  color: #292929;
  transition: all 0.5s ease-in-out 0s;
}

.journal-txt h4 a:hover {
  color: #b8a07e;
  transition: all 0.5s ease-in-out 0s;
}

.post-meta ul li {
  font-size: 12px;
  font-weight: normal;
  margin-left: 8px;
  margin-right: 8px;
  text-transform: capitalize;
  display: inline-block;
  float: none;
}

.content-main .post-meta a {
  color: #a2a2a2;
  margin-left: 5px;
}

/* Commonts */
.comments {
  background: #fff;
}

.entry-comments h6 {
  margin-right: 10px;
  font-size: 13px;
  letter-spacing: 0.1em;
  font-weight: 500;
}

.entry-comments-item {
  margin-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #f2f2f2;
}

.entry-comments-avatar {
  position: absolute;
  display: block;
  border-radius: 50%;
  width: 60px;
  height: 60px;
}

.entry-comments-body {
  padding-left: 86px;
}

.entry-comments-author {
  margin-right: 10px;
  font-size: 13px;
  color: #292929;
  letter-spacing: 0.1em;
  font-weight: 500;
}

.rep {
  font-size: 13px;
  color: #292929;
  letter-spacing: 0.1em;
  font-weight: 500;
  text-transform: capitalize;
}

.entry-comments span a {
  font-size: 13px;
  color: #999;
}

.entry-comments-reply {
  padding-left: 10%;
}

/* Commonts form */
.cmt {
  background: #fff;
}

blockquote {
  padding: 40px;
  background-color: #f2f2f2;
  margin: 30px 0;
  border: none;
  border-left: 4px solid #b8a07e;
}

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  background: #f7f7f7;
  padding-top: 50px;
  padding-bottom: 50px;
}

#footer .socials-media {
  width: 100%;
}

#footer .socials-media ul {
  display: inline-block;
  float: none;
  margin: 0 0 20px 0;
}

#footer .socials-media ul li {
  float: left;
  margin-left: 10px;
  margin-right: 10px;
}

.socials-media ul li a {
  color: #898989;
  font-size: 24px;
  letter-spacing: 0.5em;
  font-weight: 300;
  background: transparent;
}

.footerId, .socials-media ul li a:hover {
  color: #b8a07e;
  transition: all 0.5s ease-in-out 0s;
}

.socials-media ul li i.fab.fa-github-square::before{
  position: relative;
  bottom: -1.5px; 
  font-size: 1.18em;
}


.footerId {
  font-size: 12px;
  letter-spacing: 0.1em;
  font-weight: 500;
  margin-top: 0;
  text-transform: uppercase;

  margin: 25px 0;
  padding: 0;
  color: #999999;
  line-height: 28px;

  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  text-align: center;
}

.credits { 
  font-size: 9px;
  } 

/** Width between 1200x to 0
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
/** Width between 992px to 1199px
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
/** Width between 768px to 991px
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
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

/** Width between 767px to 0
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
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

/** Width between 600px to 0
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
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

/** Width between 480px to 0
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
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

/** Width between 320px to 0
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
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
  /* Single page */
  .entry-comments-body span {
    display: inline-block;
    margin-right: 0;
  }
}