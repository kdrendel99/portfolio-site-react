import React, {useEffect} from "react";
import PropTypes from "prop-types";
// import runAnimations from './../helper';
import rocket from './../img/portfolio/rocket.jpg';
import park from './../img/portfolio/nationalpark.jpg';
import jukebox from './../img/portfolio/jukebox.jpg';
import factory from './../img/portfolio/factory.jpg';
import taproom from './../img/portfolio/taproom.png';
import exchange from './../img/portfolio/exchange.jpg';
import './../../node_modules/swiper/swiper-bundle.min.js';

function Project(props){
    const [img, setImg] = React.useState(null);
    // const [animations, setAnimations] = React.useState(true);

    function renderImage(){
      let incomingImg = props.image;
  
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

  //   useEffect(() => {
  //     if (animations){
  //       runAnimations();
  //     }
  //   return () => {
  //     setAnimations(false);
  //   }
  // })
  return (

    <React.Fragment>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-${props.type}`}>
            <img src={img} className="img-fluid" alt={`${props.imgDes}`}/>
            <div className="portfolio-info">
              <h4>{props.name}</h4>
              <p>{props.description}</p>
              <a href={img} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title={props.type}><i className="bx bx-plus"></i></a>
              <a onClick = {() => props.whenProjClicked(props.id)}className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
    </React.Fragment>
  );
}

Project.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  imgDes: PropTypes.string,
  type: PropTypes.string,
  category: PropTypes.string,
  projDate: PropTypes.string,
  githubUrl: PropTypes.string,
  description: PropTypes.string,
};

export default Project;