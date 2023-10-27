import React from "react";
import "./Portfolio.scss";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import PropsPortfolio from "./PropsPortfolio";
import img1 from "../../assets/img/portfolio-1.png";
import img2 from "../../assets/img/portfolio-2.png";
import img3 from "../../assets/img/portfolio-3.png";
import {motion} from 'framer-motion'

const Portfolio = () => {
  return (
    <div className="container">
      <div className="portfolio-container" id="portfolio">
        <h4 className="title">PORTFOLIO ME</h4>
        <span className="flex">
          Each project is a unique piece of development
         
        </span>

        
        <PropsPortfolio
        className="portfolio"
          title="Personal Portfolio"
          des="lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ad cumque non quisquam odit doloremque delectus corporis sequi deserunt accusamus, deleniti esse quia id suscipit vel, repudiandae debitis soluta corrupti?"
          img={img1}
          tech="React"
          style="SCSS"
          linkCode=""
          liveDeno="https://ilhamams.pages.dev/"
          github=""
        />
      
        <PropsPortfolio
          className="portfolio real-estate"
          title="Real estate Landing Page"
          des="lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ad cumque non quisquam odit doloremque delectus corporis "
          img={img2}
          tech="React"
          style="SCSS"
          linkCode="https://real-estate-d17.pages.dev/"
          liveDeno="https://real-estate-d17.pages.dev/"
          github=""
        />

        <PropsPortfolio
          className="portfolio"
          title="Hookbook Landing Page "
          des="lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ad cumque non quisquam odit doloremque delectus corporis "
          img={img3}
          tech="React"
          style="Tailwind"
          linkCode="https://hookbook-temlete.pages.dev/"
          liveDeno="https://hookbook-temlete.pages.dev/"
          github=""
        />
        {/* <a href="" className="seeMore flex">
          <span className="more">See more Project</span> 
          <BsFillArrowRightCircleFill className='icon' />
        </a> */}
      </div>
    </div>
  );
};

export default Portfolio;
