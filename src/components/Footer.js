import React from "react";

function Footer(){
  return (
    <React.Fragment>
      <div id="footer" className="text-center">
      <div className="container">
        <div className="socials-media text-center">

          <ul className="list-unstyled">
            {/* <li><a href="#"><i className="bi bi-facebook"></i></a></li>  */}
            <li><a href="https://www.instagram.com/k.drendel/"><i className="bi bi-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/karlson-drendel/"><i className="bi bi-linkedin"></i></a></li>
            <li><a href="https://github.com/kdrendel99"><i className="fab fa-github-square"></i></a></li>
          </ul>

        </div>
      <div className='footerId'>
        <div className="credits">
          Designed by Karlson Drendel
        </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Footer;