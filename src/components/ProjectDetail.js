import React, { useEffect } from "react";
import PropTypes from "prop-types";
// import './../index.css';
import 'isotope-layout';
import './../navbar/navbar.css';
import 'bootstrap';

import rocket from './../img/portfolio/rocket.jpg';
import park from './../img/portfolio/nationalpark.jpg';
import jukebox from './../img/portfolio/jukebox.jpg';
import factory from './../img/portfolio/factory.jpg';
import taproom from './../img/portfolio/taproom.png';
import exchange from './../img/portfolio/exchange.jpg';

function ProjectDetail(props) {
  const [img, setImg] = React.useState(null);
  const { project, resetSelected } = props;

  function renderImage(){
    let incomingImg = project.image;

    switch (incomingImg) {
      case 'rocket':
        setImg(rocket);
        break;
      case 'park':
        setImg(park);
        break;
      case 'jukebox':
        setImg(jukebox);
        break;
      case 'factory':
        setImg(factory);
        break;
      case 'taproom':
        setImg(taproom);
        break;
      case 'exchange':
        setImg(exchange);
        break;
      default:
        setImg(null);
    }
  }

  useEffect(() => {
    renderImage();
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return(
    <React.Fragment>
      <main id="main">
      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>{project.name} Project Details</h2>
            <ol>
              <li><a onClick = {() => resetSelected()}>Home</a></li>
              <li><a href="../index.html#portfolio">Portfolio</a></li>
              <li>Portfolio Details</li>
            </ol>
          </div>

        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper-container">
                <div className="swiper-wrapper align-items-center">

                  <div className="swiper-slide">
                    <img src={img} alt={`${project.imgDes}`}/>
                  </div>

                  {/* <div className="swiper-slide">
                    <img src="../../img/{project.image}" alt="{project.imgDes}"/>
                  </div>

                  <div className="swiper-slide">
                    <img src="../../img/{project.image}" alt="{project.imgDes}"/>
                  </div> */}

                </div>
                {/* <div className="swiper-pagination"></div> */}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Category</strong>: {project.category}</li>
                  <li><strong>Project date</strong>: {project.projDate}</li>
                  <li><strong>Project URL</strong>: <a href={`${project.githubUrl}`}>Here</a></li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>This is an example of portfolio detail</h2>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </React.Fragment>
  );
}

ProjectDetail.propTypes = {
  project: PropTypes.object,
  resetSelected: PropTypes.func
}

export default ProjectDetail;