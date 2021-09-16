import React from "react";
import 'bootstrap';

function Footer(){
  return (
    <React.Fragment>
      <div id="footer" class="text-center">
      <div class="container">
        <div class="socials-media text-center">

          <ul class="list-unstyled">
            {/* <li><a href="#"><i class="bi bi-facebook"></i></a></li>  */}
            <li><a href="https://www.instagram.com/k.drendel/"><i class="bi bi-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/karlson-drendel/"><i class="bi bi-linkedin"></i></a></li>
            <li><a href="https://github.com/kdrendel99"><i class="fab fa-github-square"></i></a></li>
          </ul>

        </div>

        <div class="credits">
          Designed by Karlson Drendel</a>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Header;