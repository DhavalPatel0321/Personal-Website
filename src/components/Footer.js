import React from 'react'
import { Link } from 'gatsby'

import './css/footerSection.scss'; 

const Footer = class extends React.Component {
  render() {
    return (
    <div className='footer-section'>
      <h1>Want to grab some coffee?</h1>
      <h2> I'm always happy to chat!</h2>
      <button> Schedule a meeting!</button>
    </div>)
  }
}

export default Footer
