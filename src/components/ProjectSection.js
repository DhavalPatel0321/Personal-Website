import React from 'React';
import ProjectCard from './ProjectCard';
import {useStaticQuery, graphql} from 'gatsby';
import './css/projectSection.scss';

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
    <div className='project-section'>
    <>
    <h1>{data.site.siteMetadata.headers.projectHeader}</h1>
    </>
    <div className='project-cards'>
    <ProjectCard projectName='Tallcats'/>
    <ProjectCard projectName='Charger-To-Go'/>
    <ProjectCard projectName= 'MyZenLifestyle'/>
    <ProjectCard projectName= 'Raves-R-Us'/>
    </div>
    </div>
  )
};

export default ProjectSection;