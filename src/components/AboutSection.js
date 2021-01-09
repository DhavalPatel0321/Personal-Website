import React from 'React';
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image";
import './css/aboutSection.scss';


const aboutInfo ='I\'m a CS graduate from the University of Virginia. I\'m currently based out of South Carolina but I will be moving to San Francisco soon!';
function AboutSection(){

  const data = useStaticQuery(graphql`
  query AboutSectionQuery {
    site {
      siteMetadata {
        headers{
        aboutMeHeader
        }
      }
    }
  }
  `);
  console.log(data);

  return (
    <div className='about-section'>
    <h1>{data.site.siteMetadata.headers.aboutMeHeader}</h1>
    <img src="https://placekitten.com/200/300"/>
      <p>{aboutInfo}</p>
    </div>
  )
}

export default AboutSection;
