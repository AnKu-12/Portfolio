import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import Sortvista from "../../Assets/sortvisra.png";
import Portfolio from "../../Assets/port.png";
import NetflixClone from "../../Assets/netflix.png";
import DigitalClock from "../../Assets/Projects/digitalclock.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={NetflixClone}
              title="Netflix-Clone"
              description="Its a react app crafted using MERN technology showcasing the intricacies of an OTT platform,demonstrating a deep understanding of its key features and functionalities"
              ghLink="https://github.com/AnKu-12"
              
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/AnKu-12"
              
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Sortvista}
              title="Sortvista"
              description="It's a app illuminating the artistry of Sorting Algorithms by unlocking the magic of sorting algorithm through mesmerizing visualizations and enlightening properties."
              ghLink="https://github.com/AnKu-12"
             
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={DigitalClock}
              title="DigitalClock"
              description="An DigitalClock using HTML, CSS, JavaScript ,and React . It allows us to keep track of exact time and Day "
              ghLink="https://github.com/AnKu-12"
              
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}
 
export default Projects;
