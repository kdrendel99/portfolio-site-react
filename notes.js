<body>

{/* ======= Hero Section ======= */}
<div id="hero" class="home">

  <div class="container">
    <div class="hero-content">
      <h1>I am <span class="typed" data-typed-items="Karlson Drendel, a software engineer, a Full-Stack Developer, a Creative Thinker"></span></h1>
      <p>Software Engineer, Full-Stack Developer, creative thinker</p>

      <ul class="list-unstyled list-social">
        {/* <li><a href="#"><i class="bi bi-facebook"></i></a></li>*/}
        <li><a href="https://github.com/kdrendel99"><i class="fab fa-github-square"></i></a></li>
        {/*  <li><a href="#"><i class="bi bi-twitter"></i></a></li>
         <li><a href="#"><i class="bi bi-instagram"></i></a></li> */}
        <li><a href="https://www.linkedin.com/in/karlson-drendel/"><i class="bi bi-linkedin"></i></a></li>
      </ul>
    </div>
  </div>
</div>
{/* End Hero */}

<main id="main">

  {/* ======= About Section ======= */}
  <div id="about" class="paddsection">
    <div class="container">
      <div class="row justify-content-between">

        <div class="col-lg-4 ">
          <div class="div-img-bg">
            <div class="about-img">
              <img src="{Me}" class="img-responsive" alt="me"/>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="about-descr">

            <p class="p-heading">About Me </p>
            <p class="separator">My name is Karlson Drendel, and I'm a passionate Software Engineer/Full-Stack Developer seeking to kickstart my career as a programmer by gaining industry experience. I'm a recent coding bootcamp graduate looking to learn and grow my skillset in a dynamic work environment. I possess thousands of hours of hands-on, full time experience building and testing web apps, databases, and general full-stack development. I'm a motivated learner, and am always excited to learn new technologies. I also enjoy puzzles, creative thinking, photography, writing music, and bouldering.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End About Section
  
  ======= Services Section ======= */}
  <div id="services">
    <div class="container">

      <div class="services-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
        <div class="swiper-wrapper">

          <div class="swiper-slide">
            <div class="services-block">
              <i class="fab fa-react"></i>
              <span>React.js</span>
              <p class="separator">Lorem ipsum React details here</p>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="services-block">
              <i class="fab fa-node-js"></i>
              <span>Node</span>
              <p class="separator">Lorem ipsum node details</p>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="services-block">
              {/* <i class="bi bi-calendar4-week"></i> */}
              <span style="color:#b8a07e;"><h3>C#</h3></span>
              <span>C#/.NET</span>
              <p class="separator">Lorem ipsum C#/.NET details go here.</p>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="services-block">
              <i class="fab fa-linux"></i>
              <span>Linux</span>
              <p class="separator">Lorem ipsum linux CLI details here</p>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="services-block">
              <i class="fab fa-github-square"></i>
              <span>Git</span>
              <p class="separator">Lorem ipsum git details go here</p>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="services-block">
              {/*  <i class="fab fa-html5"></i> */}
              <i class="fas fa-tools"></i>
              <span>Full-Stack Development</span>
              <p class="separator">Lorem ipsum Full Stack Development details here</p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

    </div>
  </div>
  {/* End Services Section

  ======= Portfolio Section ======= */}
  <div id="portfolio" class="paddsection">

    <div class="container">
      <div class="section-title text-center">
        <h2>My Portfolio</h2>
      </div>
    </div>

    <div class="container">

      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-app">JavaScript</li>
            <li data-filter=".filter-card">C#</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div>

      <div class="row portfolio-container">

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <img src="./../img/{}" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Satoshi's Crypto</h4>
            <p>ASP.NET Core MVC application that scrapes reddit for the most mentioned cryptos in the last day, tallies the results, and returns them to the user.</p>
              <a href="./../img/{}" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Satoshi's Crypto"><i class="bx bx-plus"></i></a>
              <a href="/portfolio-details/satoshi.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Satoshi's Crypto"><i class="bx bx-plus"></i></a>
            <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
          </div>
        </div>
      </div>
    </div>

  </div>
    {/* End Portfolio Section

  ======= Contact Section ======= */}
  <div id="contact" class="paddsection">
    <div class="container">
      <div class="contact-block1">
        <div class="row">

          <div class="col-lg-6">
            <div class="contact-contact">

              <h2 class="mb-30">CONTACT ME</h2>

              <ul class="contact-details">
                <li><span>Vancouver WA, United States</span></li>
                <li><span>(360)-553-8451</span></li>
                <li><span>kdrendel99@gmail.com</span></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6">
            <form role="form" class="php-email-form">
              <div class="row gy-3">

                <div class="col-lg-6">
                  <div class="form-group contact-block1">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <textarea class="form-control" name="message" placeholder="Message" required></textarea>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>

                <div class="mt-0">
                  <input type="submit" class="btn btn-defeault btn-send" value="Send message"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Contact Section */}

</main>
{/* End #main */}

<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

</body>






FOOTER: 
<div id="footer" class="text-center">
    <div class="container">
      <div class="socials-media text-center">

        <ul class="list-unstyled">
          {/* <!-- <li><a href="#"><i class="bi bi-facebook"></i></a></li> --> */}
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

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>