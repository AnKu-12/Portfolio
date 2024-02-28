import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
} from "react-icons/si";
import gfgLogo from "../../Assets/gfg.png";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons"style={{ paddingLeft: "100px" }}>
        <img src={gfgLogo} alt="GFG Logo" />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
