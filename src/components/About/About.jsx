import React from 'react'
import "./About.scss"
import computer from "../../assets/img/cmp.jpg"

const About = () => {
  return (
    <div className='container' id='about'>
      <div className="about-container ">
        <div className="section-image">
          <img src={computer} alt="" />
        </div>
        <div className="section-text">
          <h4 className="title">ABOUT ME</h4>
          <h3 className='des'>A dedicated Front-end Developer based in South of Thailand </h3>
          <p className='detail'>
            As a junior Front-end Developer, I possess and impressive of skills in Html, CSS, JavaScript, React, Tailwind, Ans SASS, I excel design and maintaining responsive website that offer a smooth user experience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About