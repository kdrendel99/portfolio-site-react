import React from "react";

function Contact(){
  return (
    <React.Fragment>
    <main id="main">
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

                <p className="p-heading">THANK YOU! </p>
                <p className="separator">My name is Karlson Drendel, and I'm a passionate Software Engineer/Full-Stack Developer seeking to kickstart my career as a programmer by gaining industry experience. I'm a recent coding bootcamp graduate looking to learn and grow my skillset in a dynamic work environment. I possess thousands of hours of hands-on, full time experience building and testing web apps, databases, and general full-stack development. I'm a motivated learner, and am always excited to learn new technologies. I also enjoy puzzles, creative thinking, photography, writing music, and bouldering.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
    );
  }
  
  export default Contact;
