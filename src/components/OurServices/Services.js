import React from "react";
import ServiceImages from "./ServiceImages.js";
import ServicesCards from "./ServicesCards.jsx";
import {Jumbotron, Container} from "react-bootstrap"

export default function Services() {
  return (
    <>
    <div className="services-main-content">
    <Jumbotron fluid className="-content">
      <Container className="services-content">
        <h1 className="services-content mt-1 pt-5">Best Life Counseling</h1>
        <hr/>
        <h3 className="services-content pt2">We offer many services, We specialize in the following</h3>
      </Container>
    </Jumbotron>
    <ServicesCards />
    </div>

    </>
  );
}
