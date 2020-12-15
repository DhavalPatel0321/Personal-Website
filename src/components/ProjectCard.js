import React from 'React';
import './css/projectcard.scss';
// take in image as prop and project name
function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="canvas">
        <h2>{props.projectName}</h2>
        <button type="button"> Read more </button>
      </div>
    </div>
  );
}

export default ProjectCard;
