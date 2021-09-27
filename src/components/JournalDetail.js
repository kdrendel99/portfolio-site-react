import React, {useEffect} from "react";
import PropTypes from "prop-types";
import clouds from './../img/head-in-the-clouds.jpg';
import alaska from './../img/alaska.jpg';
import darkroom from './../img/darkroom-crop.jpg';
import Contact from './Contact';

import './../../node_modules/swiper/swiper-bundle.min.js';

function JournalDetail(props){
    const [img, setImg] = React.useState(null);
    const { journal, resetSelected } = props;

    function renderImage(){
      let incomingImg = journal.image;
  
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

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (

    <React.Fragment>

    <main id="main">
        <div className="main-content paddsection">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-md-offset-2">
                <div className="row">
                  <div className="container-main single-main">
                    <div className="col-md-12">
                      <div className="block-main mb-30">

                        
                        <img src={img} 
                        className="journal-image" 
                        // className="img-responsive" 
                        alt="reviews2"/>


                        <div className="content-main single-post padDiv">
                          <div className="journal-txt">
                            <h4><a href="#">{journal.name}</a></h4>
                          </div>
                          <div className="post-meta">
                            <ul className="list-unstyled mb-0">
                              <li className="author">by:<a href="#">Karlson Drendel</a></li>
                              <li className="date">date:<a href="#">{journal.projDate}</a></li>
                              {/* <li className="commont"><i className="ion-ios-heart-outline"></i><a href="#">3 Comments</a></li> */}
                            </ul>
                          </div>
                          <p className="mb-30">{journal.description1}</p>
                          <p className="mb-30">{journal.description2}</p>
                          <blockquote>{journal.quote}</blockquote>
                          <p className="mb-30">{journal.description2}</p>
                          <p className="mb-30">{journal.closer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="paddsection">
          <Contact />
        </div>
      </main>
    </React.Fragment>
  );
}

JournalDetail.propTypes = {
  journal: PropTypes.object.isRequired,
  resetSelected: PropTypes.func
};

export default JournalDetail;