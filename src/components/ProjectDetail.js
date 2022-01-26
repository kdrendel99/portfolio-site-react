import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';

import runAnimations from './../helper';
import './../../node_modules/swiper/swiper-bundle.min.js';
import 'isotope-layout';
import './../navbar/navbar.css';
import 'bootstrap';

//imitarus
import imitarus from './../img/portfolio/imitarus/imitarus.jpg';
import register from './../img/portfolio/imitarus/register.mp4';
import login from './../img/portfolio/imitarus/login.mp4';
import post from './../img/portfolio/imitarus/post.mp4';
import newpost from './../img/portfolio/imitarus/newpost.mp4';
import home from './../img/portfolio/imitarus/home.png';

//jukebox
import loading from './../img/portfolio/jukebox/loading.mp4';
import main from './../img/portfolio/jukebox/main.mp4';
import jukeboxsongs from './../img/portfolio/jukebox/jukeboxsongs.mp4';
import jukeboxtooyoung from './../img/portfolio/jukebox/jukeboxtooyoung.mp4';
import jukeboxtooold from './../img/portfolio/jukebox/jukeboxtooold.mp4';
import jukebox from './../img/portfolio/jukebox/jukebox.jpg';

//realtime
import realtime from './../img/portfolio/realtime/realtime.png';
import facedemo from './../img/portfolio/realtime/realtime-demo.mov';
import loadingrealtime from './../img/portfolio/realtime/loading.mp4';
import joinroom from './../img/portfolio/realtime/join-a-room.mp4';
import nocam from './../img/portfolio/realtime/no-camera-access.mp4';
import group from './../img/portfolio/realtime/group.mp4';

//projects without video demos
import stocks from './../img/portfolio/stocks.png';
import rocket from './../img/portfolio/rocket.png';
import park from './../img/portfolio/nationalpark.jpg';

function ProjectDetail(props) {
  const [img, setImg] = React.useState(null);
  const [img2, setImg2] = React.useState(null);
  const [img3, setImg3] = React.useState(null);
  const [img4, setImg4] = React.useState(null);
  const [img5, setImg5] = React.useState(null);
  const [img6, setImg6] = React.useState(null);

  const [readButton, setReadButton] = React.useState('Read more');
  const [descriptionTwoVisible, setDescriptionTwoVisible] = React.useState(false);
  const [project] = React.useState(props.selectedProj)
  const history = useHistory()

  function renderImage(){
    let incomingImg = project.image;

    switch (incomingImg) {
      case 'rocket':
        setImg(rocket);
        setImg2(false)
        break;
      case 'park':
        setImg(park);
        setImg2(false)
        break;
      case 'jukebox':
        setSwiperImages(loading, main, jukeboxsongs, jukeboxtooyoung, jukeboxtooold, jukebox )
        break;
      case 'realtime':
        setSwiperImages(realtime, facedemo, loadingrealtime, joinroom, nocam, realtime)
        break;
      case 'imitarus':
        setSwiperImages(imitarus, login, newpost, post, register, home)
        break;
      case 'stocks':
        setImg(stocks);
        setImg2(false)
        break;
      default:
        setImg(null);
    }
  }

  useEffect(() => {
    if (project !== null){
      renderImage();
      runAnimations()
    } else {
      returnHome()
    }
  },[project])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function returnHome(){
    history.push("/")
  }

  useEffect(() => {
    descriptionTwoVisible ? setReadButton('Read less') : setReadButton('Read more');
  },[descriptionTwoVisible])

  function toggleDescriptionTwo(){
    setDescriptionTwoVisible(!descriptionTwoVisible);
  }

  function setSwiperImages(img1, img2, img3, img4, img5, img6){
    setImg(img1)
    setImg2(img2)
    setImg3(img3)
    setImg4(img4)
    setImg5(img5)
    setImg6(img6)
  }

  function checkVideo(){
    const projectHasVideo = ['imitarus','jukebox','realtime']
    return projectHasVideo.includes(project.image)
  }

  return(
    <React.Fragment>
      {project === null ? returnHome() : 
        <React.Fragment>
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2>{project.name} Details</h2>
                <ol>
                  <li><a onClick = {() => returnHome()}>Back</a></li>
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

                    {checkVideo && 
                      <div className="portfolio-details-slider swiper">
                      <div className="swiper-wrapper align-items-center">

                        {project.image === 'imitarus' &&
                          <div className="swiper-slide first" data-swiper-autoplay="3500">
                            <img src={img} alt="" className="swiper_img"/>
                          </div>
                        }

                        {project.image === 'realtime' &&
                          <div className="swiper-slide first" data-swiper-autoplay="3500">
                            <img src={img} alt="" className="swiper_img"/>
                          </div>
                        }

                        {project.image === 'jukebox' && 
                          <div className="swiper-slide gif" data-swiper-autoplay="3000">
                            <div className="swiper-wrapper">
                              <video playsInline autoPlay loop muted className="videoInsert swiper_img" >
                                <source src={img} type="video/mp4"/>
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          </div>
                        }

                        <div className="swiper-slide gif" data-swiper-autoplay="13000">
                          <div className="swiper-wrapper">
                            <video playsInline autoPlay loop muted className="videoInsert swiper_img" >
                              <source src={img2} type="video/mp4"/>
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>

                        <div className="swiper-slide gif" data-swiper-autoplay="20000">
                          <div className="swiper-wrapper">
                            <video playsInline autoPlay loop muted className="videoInsert swiper_img" >
                              <source src={img3} type="video/mp4"/>
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>

                        <div className="swiper-slide gif" data-swiper-autoplay="8500">
                          <div className="swiper-wrapper">
                            <video playsInline autoPlay loop muted className="videoInsert swiper_img" >
                              <source src={img4} type="video/mp4"/>
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>

                        <div className="swiper-slide gif" data-swiper-autoplay="13500">
                          <div className="swiper-wrapper">
                            <video playsInline autoPlay loop muted className="videoInsert swiper_img">
                              <source src={img5} type="video/mp4"/>
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div> 

                        <div className="swiper-slide gif" data-swiper-autoplay="3500">
                          <img src={img6} alt="" className="swiper_img"/>
                        </div>
                      </div>

                      <div className="swiper-pagination"></div>
                    </div>
                    }

                    {!checkVideo && 
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
                        {project.hostedUrl? <li><strong>Hosted URL</strong>: <a href={`${project.hostedUrl}`}>Here</a></li> : null}
                        <li><strong>Github URL</strong>: <a href={`${project.githubUrl}`}>Here</a></li>
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
      }
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    selectedProj: state.selectedProj
  }
}

ProjectDetail = connect(mapStateToProps)(ProjectDetail);

export default ProjectDetail;