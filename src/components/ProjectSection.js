import React from 'React';
import ProjectCard from './ProjectCard'
import './css/projectsection.scss'
function ProjectSection(){
  return (
    <div className='project-section'>
    <ProjectCard projectName='Tallcats'/>
    <ProjectCard projectName='Charger-To-Go'/>
    <ProjectCard projectName= 'MyZenLifestyle'/>
    <ProjectCard projectName= 'Raves-R-Us'/>
    </div>
  )
};

export default ProjectSection;