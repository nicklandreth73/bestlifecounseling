import React, {useState, useEffect} from "react";
import { Carousel, Button } from "react-bootstrap";
import HomeCarouselPictures from "./HomeCarouselPictures";
import HomeCards from "./HomeCards";
import {useArticle} from "../../contexts/ArticleContext"

export default function Home() {
  const { articleData} = useArticle();
  const [carouselData, setCarouselData] = useState([
    {
      label: "The way forward starts here....",
      article: "Schedule a free consultation"
  },
  {
    label: "We can help.",
    article: "Schedule a free consultation"
  }
])

  useEffect(() =>{
    try {
    if(articleData){let slides = articleData
    slides = slides.filter((article) => article.title === "A path through a bright green forest" || article.title === "A calming waterfall in the forest")
    setCarouselData(slides)}
    }
    catch (error){
      console.log(error)
    }
  }, [articleData])



  return (
    <> 
    <div className="content">
    
      <Carousel fade={true} variant="dark" nextLabel="" prevLabel="">
      {HomeCarouselPictures.map((image) => (
          <Carousel.Item key={image.image}>
            <Carousel.Caption >
              <h1 style={image.color && {color: image.color}}>{(image.slideNumber)? carouselData[1].label : carouselData[0].label }</h1>
              <a href="https://terri-dickens.clientsecure.me/request/service">
              <Button className="btn-lg btn-block mt-3">{(image.slideNumber)? carouselData[1].article : carouselData[0].article }</Button>
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
