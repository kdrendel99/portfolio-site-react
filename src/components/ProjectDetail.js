// import React from "react";
// import PropTypes from "prop-types";

// function ProjectDetail(props) {

//   const { project } = props;
//   return(
//     <React.Fragment>
//       <main id="main">

//       <section class="breadcrumbs">
//         <div class="container">

//           <div class="d-flex justify-content-between align-items-center">
//             <h2>{project.name} Project Details</h2>
//             <ol>
//               <li><a href="../index.html">Home</a></li>
//               <li><a href="../index.html#portfolio">Portfolio</a></li>
//               <li>Portfolio Details</li>
//             </ol>
//           </div>

//         </div>
//       </section>

//       {/* <!-- ======= Portfolio Details Section ======= --> */}
//       <section id="portfolio-details" class="portfolio-details">
//         <div class="container">

//           <div class="row gy-4">

//             <div class="col-lg-8">
//               <div class="portfolio-details-slider swiper-container">
//                 <div class="swiper-wrapper align-items-center">

//                   <div class="swiper-slide">
//                     <img src="../../img/{project.image}" alt="{project.imgDes}"/>
//                   </div>

//                   <div class="swiper-slide">
//                     <img src="../../img/{project.image}" alt="{project.imgDes}"/>
//                   </div>

//                   <div class="swiper-slide">
//                     <img src="../../img/{project.image}" alt="{project.imgDes}"/>
//                   </div>

//                 </div>
//                 <div class="swiper-pagination"></div>
//               </div>
//             </div>

//             <div class="col-lg-4">
//               <div class="portfolio-info">
//                 <h3>Project information</h3>
//                 <ul>
//                   <li><strong>Category</strong>: {project.category}</li>
//                   <li><strong>Project date</strong>: {project.projDate}</li>
//                   <li><strong>Project URL</strong>: <a href="{project.githubUrl}">Here</a></li>
//                 </ul>
//               </div>
//               <div class="portfolio-description">
//                 <h2>This is an example of portfolio detail</h2>
//                 <p>{project.description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       </main>
//     </React.Fragment>
//   );
// }

// ProjectDetail.propTypes = {
//   proj: PropTypes.object,
// }

// export default ProjectDetail;