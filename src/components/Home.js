//THESE ALL WORK WITH SWIPER v 6.8.4, AND THIS TAG IN THE HEAD OF PUBLIC/INDEX.HTML: <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>
      // import React from "react";
      // import PropTypes from "prop-types";
      // import Project from "./Project";
      // import useScript from './useScript';
      // import me from './../img/me.jpg';
      // import rocket from './../img/portfolio/rocket.jpg';
      // import park from './../img/portfolio/nationalpark.jpg';
      // import jukebox from './../img/portfolio/jukebox.jpg';
      // import factory from './../img/portfolio/factory.jpg';
      // import taproom from './../img/portfolio/taproom.png';
      // import exchange from './../img/portfolio/exchange.jpg';

      // import 'swiper/bundle';
//END OF WORKING IMPORTS. ATTEMPTING TO TRY DIFFERENT IMPORTS TO FIX SWIPER.


import React from "react";
import PropTypes from "prop-types";
import Project from "./Project";
import useScript from './useScript';
import me from './../img/me.jpg';
import rocket from './../img/portfolio/rocket.jpg';
import park from './../img/portfolio/nationalpark.jpg';
import jukebox from './../img/portfolio/jukebox.jpg';
import factory from './../img/portfolio/factory.jpg';
import taproom from './../img/portfolio/taproom.png';
import exchange from './../img/portfolio/exchange.jpg';

import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../node_modules/swiper/swiper-bundle.min.js';

function Home(props){

  return (
    <React.Fragment>
  <body>

    {/* ======= Hero Section ======= */}
    <div id="hero" className="home">

      <div className="container">
        <div className="hero-content">
          <h1>I am <span className="typed" data-typed-items="Karlson Drendel, a software engineer, a Full-Stack Developer, a Creative Thinker"></span></h1>
          <p>Software Engineer, Full-Stack Developer, creative thinker</p>

          <ul className="list-unstyled list-social">
            {/* <li><a href="#"><i className="bi bi-facebook"></i></a></li>*/}
            <li><a href="https://github.com/kdrendel99"><i className="fab fa-github-square"></i></a></li>
            {/*  <li><a href="#"><i className="bi bi-twitter"></i></a></li>
            <li><a href="#"><i className="bi bi-instagram"></i></a></li> */}
            <li><a href="https://www.linkedin.com/in/karlson-drendel/"><i className="bi bi-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    {/* End Hero */}

    <main id="main">

      {/* ======= About Section ======= */}
      <div id="about" className="paddsection">
        <div className="container">
          <div className="row justify-content-between">

            <div className="col-lg-4 ">
              <div className="div-img-bg">
                <div className="about-img">
                  <img src={me} className="img-responsive" alt="me"/>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="about-descr">

                <p className="p-heading">About Me </p>
                <p className="separator">My name is Karlson Drendel, and I'm a passionate Software Engineer/Full-Stack Developer seeking to kickstart my career as a programmer by gaining industry experience. I'm a recent coding bootcamp graduate looking to learn and grow my skillset in a dynamic work environment. I possess thousands of hours of hands-on, full time experience building and testing web apps, databases, and general full-stack development. I'm a motivated learner, and am always excited to learn new technologies. I also enjoy puzzles, creative thinking, photography, writing music, and bouldering.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Section
      
      ======= Services Section ======= */}
      <div id="services">
        <div className="container">

          <div className="services-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">

              <div className="swiper-slide">
                <div className="services-block">
                  <i className="fab fa-react"></i>
                  <span>React.js</span>
                  <p className="separator">Lorem ipsum React details here</p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="services-block">
                  <i className="fab fa-node-js"></i>
                  <span>Node</span>
                  <p className="separator">Lorem ipsum node details</p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="services-block">
                  {/* <i className="bi bi-calendar4-week"></i> */}
                  <span className="C#"><h3>C#</h3></span>
                  <span>C#/.NET</span>
                  <p className="separator">Lorem ipsum C#/.NET details go here.</p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="services-block">
                  <i className="fab fa-linux"></i>
                  <span>Linux</span>
                  <p className="separator">Lorem ipsum linux CLI details here</p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="services-block">
                  <i className="fab fa-github-square"></i>
                  <span>Git</span>
                  <p className="separator">Lorem ipsum git details go here</p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="services-block">
                  {/*  <i className="fab fa-html5"></i> */}
                  <i className="fas fa-tools"></i>
                  <span>Full-Stack Development</span>
                  <p className="separator">Lorem ipsum Full Stack Development details here</p>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>

        </div>
      </div>
      {/* End Services Section

      ======= Portfolio Section ======= */}
      <div id="portfolio" className="paddsection">

        <div className="container">
          <div className="section-title text-center">
            <h2>My Portfolio</h2>
          </div>
        </div>

        <div className="container">

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">JavaScript</li>
                <li data-filter=".filter-card">C#</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src={rocket} className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Satoshi's Crypto</h4>
              <p>ASP.NET Core MVC application that scrapes reddit for the most mentioned cryptos in the last day, tallies the results, and returns them to the user.</p>
                <a href={rocket} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Satoshi's Crypto"><i className="bx bx-plus"></i></a>
                <a href="/portfolio-details/satoshi.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
              {/* <!-- <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Satoshi's Crypto"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a> --> */}
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src={park} className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>National Parks API</h4>
              <p>An API containing query-able national parks. Full CRUD functionality, and token-based JSON Authentication for POST, PUT, and PATCH updates to the database.</p>
              <a href={park} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="/portfolio-details/nationalparks.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src={jukebox} className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>High School Jukebox</h4>
              <p>UI-focused web app that returns the user a list of playable songs
                from their high-school years. Built with 3 other colleagues
                collaborating using Git. JavaScript, CSS, Jest, Webpack, OAuth2,
                Bootstrap, and Node.js.</p>
              <a href={jukebox} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
              <a href="/portfolio-details/hsjukebox.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src={factory} className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Factory Manager</h4>
              <p>An ASP.NET Core MVC application built on Entity Framework Core. Allows the user (the factory manager) full CRUD functionality to the SQL database using a many-to-many relationship</p>
              <a href={factory} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
              <a href="/portfolio-details/factory.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src={taproom} className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Taproom Manager</h4>
              <p>React application that allows a 'manager' to update and modify their keg inventory.</p>
              <a href={taproom} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
              <a href="/portfolio-details/taproom.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src={exchange} className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Exchange Rate</h4>
              <p>A vanilla JavaScript web application that uses an API to convert the current exchange rate for the user input.</p>
              <a href={exchange} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
              <a href="/portfolio-details/currency.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          </div>
        </div>

      </div>
        {/* End Portfolio Section

      ======= Contact Section ======= */}
      <div id="contact" className="paddsection">
        <div className="container">
          <div className="contact-block1">
            <div className="row">

              <div className="col-lg-6">
                <div className="contact-contact">

                  <h2 className="mb-30">CONTACT ME</h2>

                  <ul className="contact-details">
                    <li><span>Vancouver WA, United States</span></li>
                    <li><span>(360)-553-8451</span></li>
                    <li><span>kdrendel99@gmail.com</span></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <form role="form" className="php-email-form">
                  <div className="row gy-3">

                    <div className="col-lg-6">
                      <div className="form-group contact-block1">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea className="form-control" name="message" placeholder="Message" required></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>

                    <div className="mt-0">
                      <input type="submit" className="btn btn-defeault btn-send" value="Send message"/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Section */}

    </main>
    {/* End #main */}

    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

  </body>

      {/* {props.projList.map((project) =>
        <Project
          whenProjClicked = { props.onProjSelection }
          name={project.name}
          image={project.image}
          imgDes={project.imgDes}
          category={project.category}
          projDate={project.projDate}
          githubUrl={project.githubUrl}
          description={project.description}
          id={project.id}
          key={project.id}/>
      )} */}
    </React.Fragment>
  );
}

Home.propTypes = {
  projList: PropTypes.array,
  onProjSelection: PropTypes.func
};

export default Home;