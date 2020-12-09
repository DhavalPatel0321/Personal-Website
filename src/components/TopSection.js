import React from "react"

//Top Section for website, will have A heading text, some subheading text, a 'let's grab coffee link, an da picture
function TopSection() {
  return (
    <div className="top-section">
    <div className="intro-blurb">
      <h2>Hi, I'm Dhaval</h2>
      <h3>Software Engineer and Aspiring Surfer Boy</h3>
      <button type='button'> Let's grab some coffee! (Virtually)</button>
    </div>
   <img src="../img/dhaval-top-pic.png"/>
    </div>
  )
}
export default TopSection