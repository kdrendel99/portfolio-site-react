import React, {useEffect} from "react";
import PropTypes from "prop-types";
import clouds from './../img/head-in-the-clouds.jpg';
import alaska from './../img/alaska-crop.jpg';
import darkroom from './../img/darkroom-crop.jpg';

import './../../node_modules/swiper/swiper-bundle.min.js';

import { useHistory } from 'react-router-dom'

function Journal(props){
    const [img, setImg] = React.useState(null);
    const history = useHistory()

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

    function selectJournal(id){
      props.whenJournClicked(id)
      history.push("journal-details")
    }

  return (
    <React.Fragment>
      <div className="col-lg-4 col-md-6">
        <div className="journal-info">
          <img src={img} className="img-responsive" alt={`${props.imgDes}`} onClick = {() => selectJournal(props.id)} style={{cursor: "pointer"}}/>
          <div className="journal-txt">
            <h4><a onClick = {() => selectJournal(props.id)}>{props.name}</a></h4>
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