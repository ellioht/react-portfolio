import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import AboutCard from "../components/AboutCard";
import { Container, Row, Col } from "react-bootstrap";

const Main = () => {
  const projects = [
    { id: 1, title: "Project 1", description: "Description for Project 1" },
    {
      id: 2,
      title: "Language App",
      description: "Language learning app currently in development using React.",
      imageUrl: "./images/languageapp.png",
      fontClr: "#fff",
      code: "https://github.com/ellioht/language-learning-backend",
      logos: {
        showHtml: false,
        showCss: false,
        showJs: true,
        showReact: true,
        showNode: true,
      },
    },
    {
      id: 3,
      title: "Speed Typing Game",
      description: "Practice your typing skills with this game! Uses React and TailwindCSS",
      imageUrl: "./images/typinggame.png",
      fontClr: "#fff",
      linkToProject: true,
      deploy: "https://ellioht.github.io/typing-game/",
      code: "https://github.com/ellioht/typing-game",
      logos: {
        showHtml: true,
        showCss: true,
        showJs: true,
        showReact: false,
        showNode: false,
      },
    },
    {
      id: 4,
      title: "Weather App",
      description: "RESTful API weather app built in React",
      imageUrl: "./images/weatherapp.png",
      fontClr: "#222",
      linkToProject: false,
      code: "https://github.com/ellioht/weather-app",
      logos: {
        showHtml: false,
        showCss: false,
        showJs: true,
        showReact: true,
        showNode: false,
      },
    },
    {
      id: 5,
      title: "Text Adventure Game",
      description: "Object Oriented Programming text adventure game built in javascript",
      imageUrl: "./images/oop-game.png",
      fontClr: "#fff",
      linkToProject: true,
      deploy: "https://ellioht.github.io/enchanted-chateau-escape/",
      code: "https://github.com/ellioht/enchanted-chateau-escape",
      logos: {
        showHtml: true,
        showCss: false,
        showJs: true,
        showReact: false,
        showNode: false,
      },
    },
  ];

  return (
    <div className="m-2">
      <Container fluid>
        <Row className="d-flex justify-content-center">
          <Col lg={8} md={6} sm={6} className="p-0 p-col">
            <AboutCard />
          </Col>
          <Col lg={4} md={6} sm={6} className="p-0 p-col">
            <ProjectCard {...projects[1]} />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          {projects.slice(2).map((project) => (
            <Col key={project.id} lg={4} md={6} sm={6} className="p-0 p-col">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Main;
