import React, { useEffect } from "react";
import PropTypes from "prop-types";
import 'isotope-layout';
import './../navbar/navbar.css';
import 'bootstrap';
import styles from './../index.css';


import runAnimations from './../helper';
import Isotope from 'isotope-layout';
import './../../node_modules/swiper/swiper-bundle.min.js';

import imitarus from './../img/portfolio/imitarus.jpg';
import register from './../img/portfolio/register.gif';
import login from './../img/portfolio/login.gif';
import post from './../img/portfolio/post.gif';
import newpost from './../img/portfolio/newpost.gif';
import home from './../img/portfolio/home.png';

import rocket from './../img/portfolio/rocket.jpg';
import park from './../img/portfolio/nationalpark.jpg';
import jukebox from './../img/portfolio/jukebox.jpg';
import factory from './../img/portfolio/factory.jpg';
import taproom from './../img/portfolio/taproom.png';

function ProjectDetail(props) {
  const [img, setImg] = React.useState(null);
  const [readButton, setReadButton] = React.useState('Read more');
  const [descriptionTwoVisible, setDescriptionTwoVisible] = React.useState(false);
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
      case 'imitarus':
        setImg(imitarus);
        break;
      default:
        setImg(null);
    }
  }

  useEffect(() => {
    renderImage();
    runAnimations()
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    descriptionTwoVisible ? setReadButton('Read less') : setReadButton('Read more');
  },[descriptionTwoVisible])

  function toggleDescriptionTwo(){
    setDescriptionTwoVisible(!descriptionTwoVisible);
  }

  return(
    <React.Fragment>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>{project.name} Details</h2>
            <ol>
              <li><a onClick = {() => resetSelected()}>Back</a></li>
              <li>Portfolio Details</li>
            </ol>
          </div>
        </div>
      </section>

      <div className="portfolioId">
        <div id="portfolio-details" className="portfolio-details">
          <div className="container mobile_contents g-0">
            <div className="row gy-4">
              <div className="col-lg-8">

                {project.image === 'imitarus' &&
                  <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide first" data-swiper-autoplay="3500">
                      <img src={img} alt="" className="swiper_img"/>
                    </div>
                    <div className="swiper-slide gif" data-swiper-autoplay="9500">
                      <img src={login} alt="" className="swiper_img"/>
                    </div>
                    <div className="swiper-slide gif" data-swiper-autoplay="20000">
                      <img src={newpost} alt="" className="swiper_img"/>
                    </div>
                    <div className="swiper-slide gif" data-swiper-autoplay="8500">
                      <img src={post} alt="" className="swiper_img"/>
                    </div>
                    <div className="swiper-slide gif" data-swiper-autoplay="19500">
                      <img src={register} alt="" className="swiper_img"/>
                    </div>
                    <div className="swiper-slide gif" data-swiper-autoplay="3500">
                      <img src={home} alt="" className="swiper_img"/>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
                }

                {project.image !== "imitarus" && 
                  <div className="portfolio-details-slider swiper-container">
                    <div className="swiper-wrapper align-items-center">
                      <img src={img} alt={`${project.imgDes}`}/>
                    </div>
                  </div>
                }
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
                  <h2>About {project.name}</h2>
                  <p>{project.description}</p>
                  <p>{descriptionTwoVisible ? project.description2 : null }</p>
                  <p>{project.description2 ? <a onClick={() => toggleDescriptionTwo()} className="read-more">{readButton}</a> : null}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

ProjectDetail.propTypes = {
  project: PropTypes.object,
  resetSelected: PropTypes.func
}

export default ProjectDetail;