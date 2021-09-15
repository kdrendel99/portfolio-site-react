import React from "react";
import PropTypes from "prop-types";

function Project(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenProjClicked(props.id)}>
        <ol>
          <li>{props.name}</li>
          <li>{props.image}</li>
          <li>{props.imgDes}</li>
          <li>{props.category}</li>
          <li>{props.projDate}</li>
          <li>{props.githubUrl}</li>
          <li>{props.description}</li>
        </ol>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Project.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  imgDes: PropTypes.string,
  category: PropTypes.string,
  projDate: PropTypes.string,
  githubUrl: PropTypes.string,
  description: PropTypes.string,
};

export default Project;