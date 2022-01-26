import React, {useEffect} from "react";
import PropTypes from "prop-types";
import imitarus from './../img/portfolio/imitarus/imitarus.jpg';
// import imitarus from './../img/portfolio/imitarus/imitarus-banner.jpg';
import rocket from './../img/portfolio/rocket.png';
import park from './../img/portfolio/nationalpark.jpg';
import jukebox from './../img/portfolio/jukebox/jukebox.jpg';
import stocks from './../img/portfolio/stocks.png';
// import jukebox from './../img/portfolio/jukebox/jukebox-banner.jpg';
import realtime from './../img/portfolio/realtime/realtime.png';
import './../../node_modules/swiper/swiper-bundle.min.js';

import { Link, useHistory } from 'react-router-dom'

function Project(props){
    const [img, setImg] = React.useState(null);
    const history = useHistory()

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
        case 'realtime':
          setImg(realtime);
          break;
        case 'imitarus':
          setImg(imitarus);
          break;
        case 'stocks':
          setImg(stocks);
          break;
        default:
          setImg(null);
      }
    }
  
    useEffect(() => {
      renderImage();
    })

    function selectProject(id){
      props.whenProjClicked(id)
      history.push("project-details")
    }
  return (

    <React.Fragment>
      <div className={`col-lg-4 col-md-6 portfolio-item filter-${props.type}`}>
        <img src={img} className="img-fluid" alt={`${props.imgDes}`}/>
        <div className="portfolio-info" onClick = {() => selectProject(props.id)} style={{cursor:"pointer"}}>
          <h4>{props.name}</h4>
          <p>{props.shortDes}</p>
          <a onClick = {() => selectProject(props.id)}className="details-link" title="More Details"><i className="bx bx-link"></i></a>
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