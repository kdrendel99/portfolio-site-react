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
      return () => isotope.current.destroy()
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
  




//========= in the render:==================================

<div className="row">
<div className="col-lg-12 d-flex justify-content-center">
  <ul id="portfolio-flters">
    <li onClick={handleFilterKeyChange('*')}>All</li>
    <li onClick={handleFilterKeyChange('filter-app')}>JavaScript</li>
    <li onClick={handleFilterKeyChange('filter-card')}>C#</li> 

    {/* <li onClick={handleFilterKeyChange('*')}>Show Both</li>
    <li onClick={handleFilterKeyChange('vege')}>Show Veges</li>
    <li onClick={handleFilterKeyChange('fruit')}>Show Fruits</li> */}
  </ul>
</div>
</div>

<div className="row portfolio-container" 
ref={containerLoaded} onLoad={setContainerLoaded}
>

      <div className="portfolio-item filter-app">
        <span>Cucumber</span>
      </div>
      <div className="portfolio-item filter-app">
        <span>Apple</span>
      </div>
      <div className="portfolio-item filter-card">
        <span>Orange</span>
      </div>
      <div className="portfolio-item filter-app filter-card">
        <span>Tomato</span>
      </div>


{/* {props.projList.map((project) =>
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
)} */}
{console.log('finished mapping projects')}
</div>
    
    
    
//============================================================









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
  //============================================================= the below code works


  const useFocus = () => {
    const containerRef = useRef(null)
    const setFocus = () => {containerRef.current && containerRef.current.focus()}

    return [ containerRef, setFocus ]
  }

  const [containerLoaded, setContainerLoaded] = useFocus();


  useEffect(() => {
    runAnimations();
    let currentlyLoadedContainer = `${containerLoaded.current.className}`;
    currentlyLoadedContainer = '.' + currentlyLoadedContainer.substring(4);
    console.log(currentlyLoadedContainer);

    imagesLoaded(currentlyLoadedContainer, function(){
        new Isotope(currentlyLoadedContainer, {
          itemSelector: '.portfolio-item',
          layoutMode: 'fitRows'
        });
      })
  });

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
                  <ul 
                  // ref={portfolioFiltersDiv} 
                  id="portfolio-flters">
                    <li 
                    // ref={all} 
                    data-filter="*" className="filter-active">All</li>
                    <li 
                    // ref={jsApps}
                    data-filter=".filter-app">JavaScript</li>
                    <li 
                    // ref={cSharpApps} 
                    data-filter=".filter-card">C#</li>
                  </ul>
                </div>
              </div>
              <div className="row portfolio-container" 
                ref={containerLoaded} onLoad={setContainerLoaded}
                >
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
                  {console.log('finished mapping projects')}
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
        <Contact sendMessageTrue = {props.sendMessageTrue}/>
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