import React from "react";
import "./SectionOne.css";
import { Carousel } from "react-bootstrap";

function SectionOne() {
  return (
    <div className="sectionOneCarousel">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/buss2.png"
            alt="First slide"
            height="800"
          />

          <div className="caption">
            <h1>Partner of your success</h1>
            <button className="sectionOneBtn"> STB SICAR</button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/business1.png"
            alt="Second slide"
            height="800"
          />

          <div className="caption">
            <h1>Partner of your success</h1>
            <button className="sectionOneBtn"> STB SICAR</button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/buss3.png"
            alt="Third slide"
            height="800"
          />

          <div className="caption">
            <h1>Partner of your success</h1>
            <button className="sectionOneBtn"> STB SICAR</button>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SectionOne;
