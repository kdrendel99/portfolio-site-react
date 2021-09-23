import React from "react";

function ThankYou(props){
  return (
    <React.Fragment>
      <div id="about" className="paddsection">
        <div className="container">
          <div className="row justify-content-between">

            <div className="col-lg-4 ">
              <div className="div-img-bg">
                {/* <div className="about-img">
                  <img src={me} className="img-responsive" alt="me"/> */}
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="about-descr">

                <p className="p-heading">THANK YOU</p>
                <p className="separator">Thanks for inquiring. I'll be in touch soon!</p>
                  </div>
              </div>
            </div>
          </div>
    </React.Fragment>
    );
  }
  
  export default ThankYou;
