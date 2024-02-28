import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view ">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="primary-header">Ankita Yadav</span> from Mahendergarh, Haryana, India. Currently I'm pursuing my BTech from <span className="primary-header">National institue of technology , Kurukshetra.</span>
            <br/>As a passionate problem solver with a keen interest in Data Structures and Algorithms (DSA), I have dedicated significant time and effort to honing my skills and achieving notable milestones. 
            <br/>I am delighted to share that I have successfully solved approximately 500 DSA questions on GeeksforGeeks, demonstrating a deep understanding of complex algorithms and efficient coding practices.
            <br />
            <br />
            In addition to coding, here are some other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Painting
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Calligraphy
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Mandala art
            </li>
            
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
