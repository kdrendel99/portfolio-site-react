
import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import Project from './Project';
import Journal from './Journal';
import Contact from './Contact';
import PropTypes from "prop-types";
import Isotope from 'isotope-layout';
import me from './../img/me.jpg';
import runAnimations from './../helper';
// import ImagesLoaded from './../../node_modules/imagesloaded/imagesloaded.pkgd.min.js/';
import './../../node_modules/swiper/swiper-bundle.min.js';
import { exportAllDeclaration } from "@babel/types";

// const initialState = {
  
// }

  // useEffect(() => {
  //   setProjects(props.projList)
  //   const imgs = [projects];
  //   cacheImages(imgs);
  // });
//if this doesnt work, try mapping the incoming proj list before pushing it to [projects] state.
function Home(props){
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState(null);
  const [imagesCached, setImagesCached] = useState(false);
  const [finishedMapping, setFinishedMapping] = useState(false);
  // const [animations, setAnimations] = useState(false);

  useEffect(() => {
    if (isLoading){
      setProjects(props.projList)
      const imgs = [projects];
      cacheImages(imgs);
    }
  },[]);

  const cacheImages = async ({projList}) => {
    const promises = await props.projList.map((src)=> {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onLoad = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);

    setIsLoading(false);
    setImagesCached(true);
  };

  useEffect(() => {
    if(!isLoading){
      // if(!isLoading){
        runAnimations();
      // }
    }
      // return () => {
      //   // setAnimations(false);
      //   // setIsLoading(true);
      //   // setProjects(null);
      //   // setImagesCached(false);
      // }
    })
  
    useEffect( () => {
      console.log("reset")
      props.resetSelections();
    }, []);





    //original
    // useEffect(() => {
    //   if (isLoading){
    //     setProjects(props.projList)
    //     const imgs = [projects];
    //     cacheImages(imgs);
    //   }
    // },[]);

    // const cacheImages = async ({projList}) => {
    //   const promises = await props.projList.map((src)=> {
    //     return new Promise(function (resolve, reject) {
    //       const img = new Image();
  
    //       img.src = src;
    //       img.onLoad = resolve();
    //       img.onerror = reject();
    //     });
    //   });
  
    //   await Promise.all(promises);
  
    //   setIsLoading(false);
    //   setImagesCached(true);
    // };

        useEffect(() => {
      //projects in state has finished mapping by the time this is called. GUARANTEED. HOWEVER, we want to add isotope after the ones in RENDER have finished mapping. 
      //when render finishes mapping, set a NEW state (we'll call it x) to true. if x has finished (true), ONLY THEN do we call this isotope stuff.
      if (finishedMapping){
        // [projects].forEach(element => console.log(element));
      // window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
          let portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
          });
  
          // let portfolioFilters = select('#portfolio-flters li', true);
  
          // on('click', '#portfolio-flters li', function(e) {
          //   e.preventDefault();
          //   portfolioFilters.forEach(function(el) {
          //     el.classList.remove('filter-active');
          //   });
          //   this.classList.add('filter-active');
  
          //   portfolioIsotope.arrange({
          //     filter: this.getAttribute('data-filter')
          //   });
          // }, true);
        }
      // });
      }
    });

//WORKING
    // useEffect(() => {
    //   //projects in state has finished mapping by the time this is called. GUARANTEED. HOWEVER, we want to add isotope after the ones in RENDER have finished mapping. 
    //   //when render finishes mapping, set a NEW state (we'll call it x) to true. if x has finished (true), ONLY THEN do we call this isotope stuff.
    //   if (imagesCached){
    //     [projects].forEach(element => console.log(element));
    //   // window.addEventListener('load', () => {
    //     let portfolioContainer = select('.portfolio-container');
    //     if (portfolioContainer) {
    //       let portfolioIsotope = new Isotope(portfolioContainer, {
    //         itemSelector: '.portfolio-item',
    //         layoutMode: 'fitRows'
    //       });
  
    //       // let portfolioFilters = select('#portfolio-flters li', true);
  
    //       // on('click', '#portfolio-flters li', function(e) {
    //       //   e.preventDefault();
    //       //   portfolioFilters.forEach(function(el) {
    //       //     el.classList.remove('filter-active');
    //       //   });
    //       //   this.classList.add('filter-active');
  
    //       //   portfolioIsotope.arrange({
    //       //     filter: this.getAttribute('data-filter')
    //       //   });
    //       // }, true);
    //     }
    //   // });
    //   }
    // });




//WORKING
  // useEffect(() => {
  //   if (imagesCached){
  //     [projects].forEach(element => console.log(element));
  //   // window.addEventListener('load', () => {
  //     let portfolioContainer = select('.portfolio-container');
  //     if (portfolioContainer) {
  //       let portfolioIsotope = new Isotope(portfolioContainer, {
  //         itemSelector: '.portfolio-item',
  //         layoutMode: 'fitRows'
  //       });

  //       // let portfolioFilters = select('#portfolio-flters li', true);

  //       // on('click', '#portfolio-flters li', function(e) {
  //       //   e.preventDefault();
  //       //   portfolioFilters.forEach(function(el) {
  //       //     el.classList.remove('filter-active');
  //       //   });
  //       //   this.classList.add('filter-active');

  //       //   portfolioIsotope.arrange({
  //       //     filter: this.getAttribute('data-filter')
  //       //   });
  //       // }, true);
  //     }
  //   // });
  //   }
  // });
  

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  // Easy event listener function
  //   const on = (type, el, listener, all = false) => {
  //   let selectEl = select(el, all)
  //   if (selectEl) {
  //     if (all) {
  //       selectEl.forEach(e => e.addEventListener(type, listener))
  //     } else {
  //       selectEl.addEventListener(type, listener)
  //     }
  //   }
  // }



  return (
      <React.Fragment> 
      {isLoading ? <h1>Loading...</h1> : 
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
                {/* {projects ? allData.map((project) =>
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
                )}  */}
                {projects ? allData.map((project) =>
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
                ) : <h1>app says no </h1>} 
                {allData.map ? setFinishedMapping(true) : setFinishedMapping(false)}
                {/* all i want to do here is toggle a boolean to true in state so that above the return method i can call the isotope function. */}
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
            <Contact />
          </div>
          {/* End Contact Section */}
  
        </main>
        {/* End #main */}
  
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </React.Fragment>
      }
      </React.Fragment>
  );
}


Home.propTypes = {
  projList: PropTypes.array,
  onProjSelection: PropTypes.func
};

export default Home;




















// import React, { useEffect } from "react";
// import Project from './Project';
// import Journal from './Journal';
// import Contact from './Contact';
// import PropTypes from "prop-types";
// import me from './../img/me.jpg';
// import runAnimations from './../helper';
// import './../../node_modules/swiper/swiper-bundle.min.js';

// function Home(props){
//   const [animations, setAnimations] = React.useState(true);

//   useEffect(() => {
//     if(animations){
//       if (animations){
//         runAnimations();
//       }
//     }
//     return () => {
//       setAnimations(false);
//     }
//   })

//   useEffect( () => {
//     console.log("reset")
//     props.resetSelections();
//   }, []);

//   return (
//     <React.Fragment>

//     {/* ======= Hero Section ======= */}
//     <div id="hero" className="home">

//       <div className="container">
//         <div className="hero-content">
//           <h1>I am <span className="typed" data-typed-items="Karlson Drendel, a software engineer, a Full-Stack Developer, a Creative Thinker"></span></h1>
//           <p>Software Engineer, Full-Stack Developer, creative thinker</p>

//           <ul className="list-unstyled list-social">
//             {/* <li><a href="#"><i className="bi bi-facebook"></i></a></li>*/}
//             <li><a href="https://github.com/kdrendel99"><i className="fab fa-github-square"></i></a></li>
//             {/*  <li><a href="#"><i className="bi bi-twitter"></i></a></li>
//             <li><a href="#"><i className="bi bi-instagram"></i></a></li> */}
//             <li><a href="https://www.linkedin.com/in/karlson-drendel/"><i className="bi bi-linkedin"></i></a></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     {/* End Hero */}

//     <main id="main">

//       {/* ======= About Section ======= */}
//       <div id="about" className="paddsection">
//         <div className="container">
//           <div className="row justify-content-between">

//             <div className="col-lg-4 ">
//               <div className="div-img-bg">
//                 <div className="about-img">
//                   <img src={me} className="img-responsive" alt="me"/>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-7">
//               <div className="about-descr">

//                 <p className="p-heading">About Me </p>
//                 <p className="separator">My name is Karlson Drendel, and I'm a passionate Software Engineer/Full-Stack Developer seeking to kickstart my career as a programmer by gaining industry experience. I'm a recent coding bootcamp graduate looking to learn and grow my skillset in a dynamic work environment. I possess thousands of hours of hands-on, full time experience building and testing web apps, databases, and general full-stack development. I'm a motivated learner, and am always excited to learn new technologies. I also enjoy puzzles, creative thinking, photography, writing music, and bouldering.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* End About Section
      
//       ======= Services Section ======= */}
//       <div id="services">
//         <div className="container">

//           <div className="services-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
//             <div className="swiper-wrapper">

//               <div className="swiper-slide">
//                 <div className="services-block">
//                   <i className="fab fa-react"></i>
//                   <span>React.js</span>
//                   <p className="separator">Lorem ipsum React details here</p>
//                 </div>
//               </div>

//               <div className="swiper-slide">
//                 <div className="services-block">
//                   <i className="fab fa-node-js"></i>
//                   <span>Node</span>
//                   <p className="separator">Lorem ipsum node details</p>
//                 </div>
//               </div>

//               <div className="swiper-slide">
//                 <div className="services-block">
//                   {/* <i className="bi bi-calendar4-week"></i> */}
//                   <h3 style={{color: "#b8a07e"}}>C#</h3>
//                   <span>C#/.NET</span>
//                   <p className="separator">Lorem ipsum C#/.NET details go here.</p>
//                 </div>
//               </div>

//               <div className="swiper-slide">
//                 <div className="services-block">
//                   <i className="fab fa-linux"></i>
//                   <span>Linux</span>
//                   <p className="separator">Lorem ipsum linux CLI details here</p>
//                 </div>
//               </div>

//               <div className="swiper-slide">
//                 <div className="services-block">
//                   <i className="fab fa-github-square"></i>
//                   <span>Git</span>
//                   <p className="separator">Lorem ipsum git details go here</p>
//                 </div>
//               </div>

//               <div className="swiper-slide">
//                 <div className="services-block">
//                   {/*  <i className="fab fa-html5"></i> */}
//                   <i className="fas fa-tools"></i>
//                   <span>Full-Stack Development</span>
//                   <p className="separator">Lorem ipsum Full Stack Development details here</p>
//                 </div>
//               </div>
//             </div>
//             <div className="swiper-pagination"></div>
//           </div>

//         </div>
//       </div>
//       {/* End Services Section
//       ======= Portfolio Section ======= */}
//       <div id="portfolio" className="paddsection">

//         <div className="container">
//           <div className="section-title text-center">
//             <h2>My Portfolio</h2>
//           </div>
//         </div>

//         <div className="container">

//           <div className="row">
//             <div className="col-lg-12 d-flex justify-content-center">
//               <ul id="portfolio-flters">
//                 <li data-filter="*" className="filter-active">All</li>
//                 <li data-filter=".filter-app">JavaScript</li>
//                 <li data-filter=".filter-card">C#</li>
//                 {/* <li data-filter=".filter-web">Web</li> */}
//               </ul>
//             </div>
//           </div>

//           <div className="row portfolio-container">
//             {props.projList.map((project) =>
//               <Project
//                 whenProjClicked = { props.onProjSelection }
//                 name={project.name}
//                 image={project.image}
//                 imgDes={project.imgDes}
//                 type={project.type}
//                 category={project.category}
//                 projDate={project.projDate}
//                 description={project.description}
//                 id={project.id}
//                 key={project.id}/>
//             )}
//           </div>
//         </div>

//       </div>
//         {/* End Portfolio Section */}

//         {/* ======= Journal Section =======  */}
//       <div id="journal" className="text-left paddsection">
//         <div className="container">
//           <div className="section-title text-center">
//             <h2>journal</h2>
//           </div>
//         </div>

//         <div className="container">
//           <div className="journal-block">
//             <div className="row">

//             {props.journList.map((journal) =>
//               <Journal
//                 whenJournClicked = { props.onJournSelection }
//                 name={journal.name}
//                 image={journal.image}
//                 imgDes={journal.imgDes}
//                 projDate={journal.projDate}
//                 shortDes={journal.shortDes}
//                 description={journal.description}
//                 id={journal.id}
//                 key={journal.id}/>
//             )}

//             </div>
//           </div>
//         </div>

//       </div>
//       {/* <!-- End Journal Section --> */}
        

//       {/* ======= Contact Section ======= */}
//       <div id="contact" className="paddsection">
//         <Contact sendMessageTrue = {props.sendMessageTrue}/>
//       </div>
//       {/* End Contact Section */}

//     </main>
//     {/* End #main */}

//     <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

//     </React.Fragment>
//   );
// }

// Home.propTypes = {
//   projList: PropTypes.array,
//   onProjSelection: PropTypes.func
// };

// export default Home;












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
                )}  */}
                {/* {projects} */}