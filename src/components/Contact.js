import React, { useEffect }from "react";

function Contact(){
  const [sentMessage, setMessage] = React.useState(false);

  const validateForm = () => {
    const name = document.querySelector('[name="name"]').value;
    const email = document.querySelector('[name="email"]').value;
    const subject = document.querySelector('[name="subject"]').value;
    const message = document.querySelector('[name="message"]').value;
    //validation occurs here
    //if validation returns OK, send all of the above to the api.
  }

  function renderForm(){
    return (
      <form role="form" className="php-email-form" action="https://formsubmit.co/cd4e17d037546dab8d309e9e346eb7a6" method="POST">
      {/* <input type="hidden" name="_subject" value="New message from portfolio website."/> */}
        <div className="row gy-3">
          <div className="col-lg-6">
            <div className="form-group contact-block1">
              <input type="text" required name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <input type="email" className="form-control" required name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <input type="text" className="form-control" required name="subject" id="subject" placeholder="Subject" required />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <textarea className="form-control" name="message" placeholder="Message" required></textarea>
            </div>
          </div>

          <div className="mt-0">
            <input type="submit" className="btn btn-default btn-send" value="Send message"
            // onClick = {() => validateForm()}
            />
          </div>
          <input type="hidden" name="_captcha" value="false"/>
        </div>
      </form>
    )
  }

  function renderThankYou(){
    return (
      <div id="about" className="paddsection">
        <div className="container">
          <div className="row justify-content-between">

            <div className="col-lg-7">
              <div className="about-descr">
                <h2>Thank you!</h2>
                <div className="portfolio-description">
                  <p>Your message has been sent. Thanks for inquiring, I'll be in touch soon!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
                  <li><span><a className="email" href="mailto:kdrendel99@gmail.com?subject=Email via your portfolio site">kdrendel99@gmail.com</a></span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              {sentMessage ? renderThankYou() : renderForm()}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}



export default Contact;