import React from "react";
import "./Portfolio.scss";
import { BsGithub } from "react-icons/bs";
import { RxExternalLink } from "react-icons/rx";
import { project } from "../../assets/constant/data";

const PropsPortfolio = ({
  img,
  title,
  des,
  tech,
  style,
  github,
  liveDeno,
  className,
}) => {
  return (
    <>
      <div className={className}>
        <div className="section-image">
          <img src={img} alt="" />
        </div>
        <div className="description">
          <h4 className="title">{title}</h4>
          <span className="detail">{des}</span>
          <div className="tools flex">
            <h4>{tech}</h4>
            <h4>{style}</h4>
          </div>
          <div className="source flex">
            <a href={github}>
              <h4 className="flex">
                Code <BsGithub className="icon" />
              </h4>
            </a>
            <a href={liveDeno}>
              <h4 className="flex">
                Live Demo <RxExternalLink className="icon" />
              </h4>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropsPortfolio;
