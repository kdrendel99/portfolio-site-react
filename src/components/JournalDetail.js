import React, {useEffect} from "react";
import PropTypes from "prop-types";
import clouds from './../img/head-in-the-clouds.jpg';
import alaska from './../img/alaska.jpg';
import darkroom from './../img/darkroom-crop.jpg';

import './../../node_modules/swiper/swiper-bundle.min.js';

function JournalDetail(props){
    const [img, setImg] = React.useState(null);
    const { journal, 
      // resetSelected 
    } = props;

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
    {/* <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>{journal.name} Project Details</h2>
            <ol>
              <li><a onClick = {() => resetSelected()}>Home</a></li>
              <li><a href="../index.html#journal">Journal</a></li>
              <li>Journal Details</li>
            </ol>
          </div>

        </div>
      </section> */}
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
                          <p className="mb-30">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                            using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
                            sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                          <p className="mb-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                          <blockquote>If you are still looking for that one person who will change your life, take a look in the mirror.</blockquote>
                          <p className="mb-30">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                            Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                    </div>
                    <div className="col-lg-12">
                      <div className="cmt padDiv">
                        {/* <form id="comment-form" method="post" action="" role="form">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <input id="form_name" type="text" name="name" className="form-control" placeholder="Name *" required="required"/>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <input id="form_email" type="email" name="email" className="form-control" placeholder="email *" required="required"/>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input id="form_name" type="text" name="website" className="form-control" placeholder="Website"/>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group">
                                <textarea id="form_message" name="message" className="form-control" placeholder="Message *" style="height: 200px;" required="required"></textarea>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <input type="submit" className="btn btn-defeault btn-send" value="Send message"/>
                            </div> 
                          </div> 
                        </form> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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