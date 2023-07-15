import React, { Fragment } from "react";
import "./pro.css";
// import { Link } from "react-router-dom";
const ProjectCard = ({ project }) => {
 
  return (
   <Fragment>
      <div className="projectCard">
      <p>{project.name}</p>
      <img src={project.images[0].url} alt={project.name} />
      </div>
      </Fragment>
  );
};

export default ProjectCard;
