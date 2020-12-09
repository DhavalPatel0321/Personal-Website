import React from 'React';

const aboutInfo ='insert bullshit here';
function AboutSection(){
  return (
    <div className='about-section'>
    <h1>About</h1>
    <img src="https://placekitten.com/200/300"/>
      <p>{aboutInfo}</p>
    </div>
  )
}

export default AboutSection;
