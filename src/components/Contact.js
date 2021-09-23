import React from "react";

function Contact(){
  return (

    <React.Fragment>
      <div className="container">
        <div className="contact-block1">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-contact">
                <h2 className="mb-30">CONTACT ME</h2>
                <ul className="contact-details">
                  <li><span>Vancouver WA, United States</span></li>
                  <li><span>(360)-553-8451</span></li>
                  <li><span>kdrendel99@gmail.com</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <form role="form" className="php-email-form" action="https://formsubmit.co/cd4e17d037546dab8d309e9e346eb7a6" method="POST">
              {/* <input type="hidden" name="_subject" value="New message from portfolio website."/> */}
                <div className="row gy-3">
                  <div className="col-lg-6">
                    <div className="form-group contact-block1">
                      <input type="text" required name="name" className="form-control" id="name" placeholder="Your Name" required/>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="email" className="form-control" required name="email" id="email" placeholder="Your Email" required/>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <input type="text" className="form-control" required name="subject" id="subject" placeholder="Subject" required/>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea className="form-control" name="message" placeholder="Message" required></textarea>
                    </div>
                  </div>

                  {/* <div className="col-lg-12">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div> */}

                  <div className="mt-0">
                    <input type="submit" className="btn btn-default btn-send" value="Send message"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}



export default Contact;