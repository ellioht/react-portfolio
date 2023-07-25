import { useState } from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { DiCodeBadge } from "react-icons/di";
import { BiLogoJavascript, BiLogoReact } from "react-icons/bi";
import { FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  fontClr,
  linkToProject,
  deploy,
  code,
  logos,
}) => {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    color: `${fontClr}`,
  };

  return (
    <div>
      <div className="p-card c-clr">
        <div style={cardStyle} className="p-4 card-bg zoom">
          <div className="title d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between">
              <div className="project-info">
                <h3>{title}</h3>
                <span className="hide-on-sm">
                  <p>{description}</p>
                </span>
              </div>
              <div className="d-flex align-items-center flex-column">
                {linkToProject && (
                  <button className="logo-btn" onClick={() => window.open(deploy, "_blank")}>
                    <BsFillArrowUpRightCircleFill className="logo-icon" size={64} />
                  </button>
                )}
              </div>
            </div>
            <div className="align-self-end">
              <div className="d-flex logo-box">
                <div className="logo-container">
                  {logos.showHtml && <FaHtml5 className="logo-html" size={48} />}
                  {logos.showCss && <FaCss3Alt className="logo-css" size={48} />}
                  {logos.showJs && <BiLogoJavascript className="logo-js" size={48} />}
                  {logos.showReact && <BiLogoReact className="logo-react" size={48} />}
                  {logos.showNode && <FaNodeJs className="logo-node" size={48} />}
                </div>
                <div className="p-4" />
                <button className="logo-btn" onClick={() => window.open(code, "_blank")}>
                  <DiCodeBadge className="logo-icon" size={48} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
