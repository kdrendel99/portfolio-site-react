import React from "react";
import PropTypes from "prop-types";
import Project from "./Project";

function Home(props){
  return (
    <React.Fragment>
      <hr/>
      {props.projList.map((project) =>
        <Project
          whenProjClicked = { props.onProjSelection }
          name={project.name}
          image={project.image}
          imgDes={project.imgDes}
          category={project.category}
          projDate={project.projDate}
          githubUrl={project.githubUrl}
          description={project.description}
          id={project.id}
          key={project.id}/>
      )}
    </React.Fragment>
  );
}

Home.propTypes = {
  projList: PropTypes.array,
  onProjSelection: PropTypes.func
};

export default Home;