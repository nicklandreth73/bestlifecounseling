import React from "react";
import { Carousel, Button } from "react-bootstrap";
import HomeCarouselPictures from "./HomeCarouselPictures";
import HomeCards from "./HomeCards";

export default function Home() {
  return (
    <> 
    <div className="content">
      <Carousel fade={true} variant="dark" nextLabel="" prevLabel="">
        {HomeCarouselPictures.map((image) => (
          <Carousel.Item key={image.image}>
            <Carousel.Caption >
              <h1 style={image.color && {color: image.color}}>{image.text}</h1>
              <a href="/schedule">
              <Button className="btn-lg btn-block mt-3">Schedule a free consultation</Button>
              </a>
            </Carousel.Caption>
            <img
              className="home-carousel-img"
              src={image.image}
              alt={image.alt}

            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
      <HomeCards style={{backGroundColor: "#cbe3e6"}} />
    </>
  );
}
