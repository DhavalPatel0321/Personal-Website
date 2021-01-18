import React from 'React';
import ProjectCard from './ProjectCard';
import {useStaticQuery, graphql} from 'gatsby';

import './css/projectSection.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
  };
  const tallcatsText = 'Tallcats text here';
  const chargerToGoText = 'Charger to go text here';
  const myZenLifestyleText = 'mzl text here';
  const rruText = 'rru text here';
  return (
    <div className='project-section'>
    <>
    <h1>{data.site.siteMetadata.headers.projectHeader}</h1>
    </>
    <div className='project-cards'>
    <Slider {...settings}>
      <ProjectCard projectName='Tallcats' imgSrc='https://placekitten.com/600/200' infoText={tallcatsText}/>
      <ProjectCard projectName='Charger-To-Go' imgSrc='https://placekitten.com/600/200' infoText={chargerToGoText}/>
      <ProjectCard projectName= 'MyZenLifestyle' imgSrc='https://placekitten.com/600/200' infoText={myZenLifestyleText}/>
      <ProjectCard projectName= 'Raves-R-Us' imgSrc='https://placekitten.com/600/200' infoText={rruText}/>
    </Slider>
    </div>
    </div>
  )
};

export default ProjectSection;