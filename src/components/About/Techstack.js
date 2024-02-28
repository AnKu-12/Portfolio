import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  
} from "react-icons/di";
import {
  SiFirebase,
  
} from "react-icons/si";
import cppLogo from"../../Assets/cpp.png"
import cLogo from"../../Assets/C_Logo.png"
import sqlLogo from "../../Assets/sql.png"
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img src={cppLogo} alt="C++ Logo" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={sqlLogo} alt="sql Logo" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={cLogo} alt="c Logo" />
      </Col>
    </Row>
  );
}

export default Techstack;
