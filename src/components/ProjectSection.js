import React from 'React';
import ProjectCard from './ProjectCard';
import {useStaticQuery, graphql} from 'gatsby';
import './css/projectsection.scss';

function ProjectSection(){
  const data = useStaticQuery(graphql`
  query ProjectSectionQuery {
    site {
      siteMetadata {
        headers{
        projectHeader
        }
      }
    }
  }
  `);
  
  return (
    <>
    <div>
    <h1>{data.site.siteMetadata.headers.projectHeader}</h1>
    </div>
    <div className='project-section'>
    <ProjectCard projectName='Tallcats'/>
    <ProjectCard projectName='Charger-To-Go'/>
    <ProjectCard projectName= 'MyZenLifestyle'/>
    <ProjectCard projectName= 'Raves-R-Us'/>
    </div>
    </>
  )
};

export default ProjectSection;