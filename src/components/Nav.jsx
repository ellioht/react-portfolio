import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";

const Nav = () => {
  return (
    <>
      <Navbar className="ms-2 me-2 pb-0">
        <Container fluid>
          <Navbar.Brand className="nav-name p-0">
            <span className="green-highlight">elliotHallam</span>
            <span className="red-highlight">()</span>
            <span className="hide-on-sm">
              <span className="green-highlight">.portfolio</span>
              <span className="red-highlight">()</span>
            </span>
          </Navbar.Brand>
          <div>
            <a
              className="logo-link ms-2 me-2"
              href="https://www.linkedin.com/in/elliothallam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={32} />
            </a>
            <a
              className="logo-link ms-2 me-2"
              href="https://github.com/ellioht"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscGithub size={32} />
            </a>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
