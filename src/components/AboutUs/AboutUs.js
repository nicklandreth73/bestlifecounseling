import React from "react";
import {Jumbotron, Container} from "react-bootstrap"
import terriPicture from "./AboutUsImage"

export default function AboutUs() {

  const title = "Terri Louise Dickens"
  const articleHeader = "Caring and Professional"
  const articleContent = "Terri has had a long succesful career working in education as a school psychologist, and in healthcare as a . Terri has always believed that to help people the most important thing is to see them as they see themselves. Terri believes in supporting people with cognitive behavioral strategies to help them reach their goals"

  return (
    <>
    <div className="content">
    <div className="about-us-container" >
    <Jumbotron fluid className="about-us-content">
    <Container className="about-us-content">
      <h1 className="about-us-content mt-3 pt-5">{title}</h1>
      <h1 className="about-us-content pt-2">{articleHeader}</h1>
      <hr/>
      <h3 className="about-us-content mt-1 p-1" >{articleContent}</h3>
      <img src={terriPicture.image} alt={terriPicture.alt} className="about-us-image border-secondary rounded shadow mt-5"/>


    </Container>
    </Jumbotron>

    </div>
    </div>
    </>
  );
}
