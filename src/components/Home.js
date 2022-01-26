import React, { useEffect, useFocus, useCallback, isElemVisible , useState, useRef, forwardRef, useImperativeHandle } from "react";
import Project from './Project';
import Journal from './Journal';
import Contact from './Contact';
import PropTypes from "prop-types";
import me from './../img/me.jpg';
import runAnimations from './../helper';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import './../../node_modules/swiper/swiper-bundle.min.js';

function Home(props){
  // // init one ref to store the future isotope object
  const isotope = React.useRef()
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState(null)

  const useFocus = () => {
    const containerRef = useRef(null)
    const setFocus = () => {containerRef.current && containerRef.current.focus()}
    return [ containerRef, setFocus ]
  }

  const [containerLoaded, setContainerLoaded] = useFocus();



  // initialize an Isotope object with configs
  React.useEffect(() => {
    // if ({containerLoaded}){
      runAnimations();
      let currentlyLoadedContainer = `${containerLoaded.current.className}`;
      currentlyLoadedContainer = '.' + currentlyLoadedContainer.substring(4);
  
      imagesLoaded(currentlyLoadedContainer, function(){
        isotope.current = new Isotope(currentlyLoadedContainer, {
          itemSelector: '.portfolio-item',
          layoutMode: 'fitRows',
        });
        })

      // cleanup
      return () => { 
        if (isotope.current) {
          isotope.current.destroy() 
        }
      }
    }, [])


  // handling filter key change
  React.useEffect(() => {
    if (filterKey !== null){
      filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `.${filterKey}`})
    }
  }, [filterKey])

  const handleFilterKeyChange = key => () => setFilterKey(key)


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
            <li><a href="https://twitter.com/karlsondrendel"><i className="bi bi-twitter"></i></a></li>
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
                <div className='aboutId'>
                  <p className="p-heading">About Me </p>
                  <p className="separator">My name is Karlson Drendel, and I'm a passionate Front End/Full Stack Software Engineer. I possess over 5 years of professional design experience, and have designed and built dozens of full-stack web applications just like this one. I thrive in dynamic environments where I can learn and grow my skillset surrounded by other equally driven individuals. I additionally offer thousands of hours of hands-on, full-time experience with everything from API design/structuring to basic HTML. I'm a motivated learner, and am always excited to learn new technologies. I also enjoy puzzles, rock-climbing, creative thinking/writing, photography, and recording music.</p>
                </div>
              </div>
              {/* <a href="/images/myw3schoolsimage.jpg" download style={{marginTop:"10px"}}>Resume</a> */}
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
                  <p className="separator">React, Vue, Typescript, Redux</p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="services-block">
                  <i className="fab fa-node-js"></i>
                  <span>Node, Express</span>
                  <p className="separator">Full stack web development</p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="services-block">
                  <i><h3 style={{color: "#b8a07e"}}>C#</h3></i>
                  <span>C#/.NET</span>
                  <p className="separator">Object oriented back-end</p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="services-block">
                  <i className="fas fa-database"></i>
                  <span>SQL & NoSQL</span>
                  <p className="separator">MySQL, AWS, MongoDB, Firestore, Apollo, GraphQl</p>
                </div>
              </div>
              

              <div className="swiper-slide">
                <div className="services-block">
                  <i className="fas fa-database"></i>
                  <span>SQL & NoSQL</span>
                  <p className="separator">MySQL, MongoDB, Firestore</p>
                </div>
              </div>
              

              <div className="swiper-slide">
                <div className="services-block">
                  <i className="fab fa-linux"></i>
                  <span>Linux</span>
                  <p className="separator">Command line interface</p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="services-block">
                  <i className="fab fa-github-square"></i>
                  <span>Git</span>
                  <p className="separator">Source control & collaboration</p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="services-block">
                  <i className="fas fa-tools"></i>
                  <span>Full-Stack Development</span>
                  <p className="separator">From HTML to server side</p>
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
              <li onClick={handleFilterKeyChange('*')} className={filterKey === '*' ? 'filter-active': null}>All</li>
              <li onClick={handleFilterKeyChange('filter-app')} className={filterKey === 'filter-app' ? 'filter-active': null}>JavaScript</li>
              <li onClick={handleFilterKeyChange('filter-card')} className={filterKey === 'filter-card' ? 'filter-active': null}>C#</li> 
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" ref={containerLoaded} onLoad={setContainerLoaded}>
          {props.projList.map((project) => 
            <Project
              whenProjClicked = { props.onProjSelection }
              name={project.name}
              image={project.image}
              imgDes={project.imgDes}
              type={project.type}
              category={project.category}
              projDate={project.projDate}
              githubUrl={project.githubUrl}
              shortDes={project.shortDes}
              description={project.description}
              description2={project.description2}
              id={project.id}
              key={project.id}
            />
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
                description1={journal.description1}
                description2={journal.description2}
                quote={journal.quote}
                description3={journal.description3}
                closer={journal.closer}
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
        <Contact sendMessageTrue = {props.sendMessageTrue}/>
      </div>
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