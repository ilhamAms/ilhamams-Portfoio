import React from 'react'
import "./Home.scss"
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiSolidFileCss,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoSass
} from "react-icons/bi";
import { PiStackSimpleThin } from "react-icons/pi"

// img
import profile from "../../assets/img/profile.jpg"

const Home = () => {
  return (
    <div className="container">
      <div className='home-container' id='home'>
        <div className="profile">
          <div className="text">
            <h1>Front-End React <br /> Developer </h1>
            <span>Hi,I'm Ilham Ameesa. A Junior Front-end React <br />  Developer based in Yala. Thailand </span>
            <div className="link-icon">
              <a href="#">
                <BsLinkedin className='link-icons' />
              </a>
              <a href="https://github.com/ilhamAms">
                <BsGithub className='link-icons' />
              </a>

            </div>
          </div>
          <div className="section-image">
            <img src={profile} alt="" />
          </div>
        </div>
        <div className="tech-skills">
          <span className='tech-text'>Tech Stack  <PiStackSimpleThin /></span>
          <div className="stacks">
            <AiFillHtml5 className='icon html' />
            <BiSolidFileCss className='icon css' />
            <BiLogoJavascript className='icon js' />
            <BiLogoReact className='icon react' />
            <BiLogoTailwindCss className='icon tailwind' />
            <BiLogoSass className='icon sass' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home