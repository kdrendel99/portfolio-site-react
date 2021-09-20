import React, {useEffect} from "react";
import PropTypes from "prop-types";
import clouds from './../img/head-in-the-clouds.jpg';
import alaska from './../img/alaska-crop.jpg';
import darkroom from './../img/darkroom-crop.jpg';

import './../../node_modules/swiper/swiper-bundle.min.js';

function Journal(props){
    const [img, setImg] = React.useState(null);

    function renderImage(){
      let incomingImg = props.image;
  
      switch (incomingImg) {
        case 'clouds':
          setImg(clouds);
          break;
        case 'alaska':
          setImg(alaska);
          break;
        case 'darkroom':
          setImg(darkroom);
          break;
        default:
          setImg(null);
      }
    }
  
    useEffect(() => {
      renderImage();
    })
  return (

    <React.Fragment>
      <div className="col-lg-4 col-md-6">
        <div className="journal-info">
          {/* <a href={img}> */}
            <img src={img} className="img-responsive" alt={`${props.imgDes}`} onClick = {() => props.whenJournClicked(props.id)} style={{cursor: "pointer"}}/>
          {/* </a> */}
          <div className="journal-txt">
            <h4><a onClick = {() => props.whenJournClicked(props.id)}>{props.name}</a></h4>
            <p className="separator">{props.shortDes}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Journal.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  imgDes: PropTypes.string,
  projDate: PropTypes.string,
  description: PropTypes.string,
};

export default Journal;