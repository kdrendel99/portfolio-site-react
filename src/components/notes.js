//========================================================================


  // useEffect(() => {
  //   setProjects(props.projList.map(project => <Project whenProjClicked = { props.onProjSelection } name={project.name} image={project.image} imgDes={project.imgDes} type={project.type} category={project.category} projDate={project.projDate} description={project.description} id={project.id} key={project.id}/>
  //   ))
  // },[])

  // useEffect(() => {
  //   const elem = document.querySelector('.portfolio-container')
  //   setIsotope(new Isotope( elem, {
  //     itemSelector: '.portfolio-item',
  //     layoutMode: 'fitRows'
  //   }))
  // }, [projects]);
  //=====================================================================

  // imgLoad.on( {loaded}, function( instance ) {
  //   console.log('ALWAYS - all images have been loaded');
  // });


    // imagesLoaded(document.querySelector('.portfolio-container'), function(instance)){

    // }

    // useEffect(() => {
    //   var $grid = $('.portfolio-container').imagesLoaded( function() {
    //     $grid.isotope({
    //       itemSelector: '.portfolio-item',
    //       layoutMode: 'fitRows'
    //     });
    //   });
    // // })

        // const callIsotope = () => {
    //   let portfolioContainer = select('.portfolio-container');
    //   if (portfolioContainer) {
    //     let portfolioIsotope = new Isotope(portfolioContainer, {
    //       itemSelector: '.portfolio-item',
    //       layoutMode: 'fitRows'
    //     });
  
        // let portfolioFilters = select('#portfolio-flters li', true);
  
        // on('click', '#portfolio-flters li', function(e) {
        //   e.preventDefault();
        //   portfolioFilters.forEach(function(el) {
        //     el.classList.remove('filter-active');
        //   });
        //   this.classList.add('filter-active');
  
        //   portfolioIsotope.arrange({
        //     filter: this.getAttribute('data-filter')
        //   });
        // }, true);
    //   }
    // }










    



 
 
 
 
 
 
 // useEffect( () => {
  //   setLoaded(true);
  // }, []);

  //FIGURING OUT THE PROJECT THUMBNAIL PREVIEWS HERE.======================================
  // const select = (el, all = false) => {
  //   el = el.trim()
  //   if (all) {
  //     return [...document.querySelectorAll(el)]
  //   } else {
  //     return document.querySelector(el)
  //   }
  // }

  // // Easy event listener function
  //   const on = (type, el, listener, all = false) => {
  //   let selectEl = select(el, all)
  //   if (selectEl) {
  //     if (all) {
  //       selectEl.forEach(e => e.addEventListener(type, listener))
  //     } else {
  //       selectEl.addEventListener(type, listener)
  //     }
  //   }
  // }

  // useLayoutEffect(() => {
  //   if ({isLoaded}){
  //     window.addEventListener('load', () => {
  //       let portfolioContainer = select('.portfolio-container');
  //       if (portfolioContainer) {
  //         let portfolioIsotope = new Isotope(portfolioContainer, {
  //           itemSelector: '.portfolio-item',
  //           layoutMode: 'fitRows'
  //         });
    
          // let portfolioFilters = select('#portfolio-flters li', true);
    
          // on('click', '#portfolio-flters li', function(e) {
          //   e.preventDefault();
          //   portfolioFilters.forEach(function(el) {
          //     el.classList.remove('filter-active');
          //   });
          //   this.classList.add('filter-active');
    
          //   portfolioIsotope.arrange({
          //     filter: this.getAttribute('data-filter')
          //   });
          // }, true);
  //       }
  //     });
  //   }
  // },[isLoaded]);



  // const select = (el, all = false) => {
  //   el = el.trim()
  //   if (all) {
  //     return [...document.querySelectorAll(el)]
  //   } else {
  //     return document.querySelector(el)
  //   }
  // }



  

  // const portfolioContainer = useCallback(container => {
  //   if (container !== null){
  //     let portfolioContainer = document.querySelector('.portfolio-container');
  //     // setContainer(portfolioContainer);
  //     let portfolioIsotope = new Isotope(portfolioContainer, {
  //       itemSelector: '.portfolio-item',
  //       layoutMode: 'fitRows'
  //     })
  //   }
  // }, []);


  // async function handleProjectMapping(){
  //   await props.projList.map((project) =>
  //   <Project
  //     whenProjClicked = { props.onProjSelection }
  //     name={project.name}
  //     image={project.image}
  //     imgDes={project.imgDes}
  //     type={project.type}
  //     category={project.category}
  //     projDate={project.projDate}
  //     description={project.description}
  //     id={project.id}
  //     key={project.id}/>
  //   )
  //   await portfolioContainer()
  // }

  // const portfolioContainer = useCallback(container => {
  //   if (container !== null){
  //     let portfolioContainer = document.querySelector('.portfolio-container');
  //     // setContainer(portfolioContainer);
  //     let portfolioIsotope = new Isotope(portfolioContainer, {
  //       itemSelector: '.portfolio-item',
  //       layoutMode: 'fitRows'
  //     })
  //   }
  // }, []);

  // async function handleProjectMapping(){
  //   await props.projList.map((project) =>
  //   <Project
  //     whenProjClicked = { props.onProjSelection }
  //     name={project.name}
  //     image={project.image}
  //     imgDes={project.imgDes}
  //     type={project.type}
  //     category={project.category}
  //     projDate={project.projDate}
  //     description={project.description}
  //     id={project.id}
  //     key={project.id}/>
  //   )
  //   await portfolioContainer()
  // }