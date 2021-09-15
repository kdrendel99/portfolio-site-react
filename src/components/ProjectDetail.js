import React from "react";
import PropTypes from "prop-types";

function ProjectDetail(props) {

  const { project } = props;
  return(
    <React.Fragment>
      <h1>Project Detail</h1>
      <h3>{project.name}</h3>
      <h3>{project.image}</h3>
      <h3>{project.imgDes}</h3>
      <h3>{project.category}</h3>
      <h3>{project.projDate}</h3>
      <h3>{project.githubUrl}</h3>
      <h3>{project.description}</h3>
      <hr/>
    </React.Fragment>
  );
}

ProjectDetail.propTypes = {
  proj: PropTypes.object,
}

export default ProjectDetail;