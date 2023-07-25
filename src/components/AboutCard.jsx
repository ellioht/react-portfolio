import { useState } from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const AboutCard = () => {
  return (
    <div>
      <div className="p-card a-clr">
        <div className="p-4">
          <div className="d-flex justify-content-between title">
            <div className="project-info">
              <h3>About me</h3>
              <span>
                <p>
                  My name is Elliot Hallam, I am a fullstack software developer with a strong foundation in various
                  programming languages frameworks, and technologies. 
                  <br />
                  <br />
                  I am currently working in MERN stack. 
                  <br />
                  (React, Node JS,
                  Express JS, MongoDB)
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
