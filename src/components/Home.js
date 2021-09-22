import React, { useEffect } from "react";
import Project from './Project';
import Journal from './Journal';
import PropTypes from "prop-types";
import me from './../img/me.jpg';
import runAnimations from './../helper';
import './../../node_modules/swiper/swiper-bundle.min.js';

function Home(props){
  const [animations, setAnimations] = React.useState(true);

  useEffect(() => {
    if(animations){
      if (animations){
        runAnimations();
      }
    }
    return () => {
      setAnimations(false);
    }
  })

  useEffect( () => {
    console.log("reset")
    props.resetSelections();
  }, []);

  return (
    <React.Fragment>

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
                  <h3 style={{color: "#b8a07e"}}>C#</h3>
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
                {/* <li data-filter=".filter-web">Web</li> */}
              </ul>
            </div>
          </div>

          <div className="row portfolio-container">
            {props.projList.map((project) =>
              <Project
                whenProjClicked = { props.onProjSelection }
                name={project.name}
                image={project.image}
                imgDes={project.imgDes}
                type={project.type}
                category={project.category}
                projDate={project.projDate}
                description={project.description}
                id={project.id}
                key={project.id}/>
            )}
          </div>
        </div>

      </div>
        {/* End Portfolio Section */}

        {/* ======= Journal Section =======  */}
      <div id="journal" className="text-left paddsection">
        <div className="container">
          <div className="section-title text-center">
            <h2>journal</h2>
          </div>
        </div>

        <div className="container">
          <div className="journal-block">
            <div className="row">

            {props.journList.map((journal) =>
              <Journal
                whenJournClicked = { props.onJournSelection }
                name={journal.name}
                image={journal.image}
                imgDes={journal.imgDes}
                projDate={journal.projDate}
                shortDes={journal.shortDes}
                description={journal.description}
                id={journal.id}
                key={journal.id}/>
            )}

            </div>
          </div>
        </div>

      </div>
      {/* <!-- End Journal Section --> */}
        

      {/* ======= Contact Section ======= */}
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
                      <input type="submit" className="btn btn-default btn-send" value="Send message"/>
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

    </React.Fragment>
  );
}

Home.propTypes = {
  projList: PropTypes.array,
  onProjSelection: PropTypes.func
};

export default Home;