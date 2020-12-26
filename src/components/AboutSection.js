import React from 'React';
import { useStaticQuery, graphql } from 'gatsby'

const aboutInfo ='insert bullshit here';
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
  
  return (
    <div className='about-section'>
    <h1>{data.site.siteMetadata.headers.aboutMeHeader}</h1>
    <img src="https://placekitten.com/200/300"/>
      <p>{aboutInfo}</p>
    </div>
  )
}

export default AboutSection;
