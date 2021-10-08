import React, {useState, useEffect} from "react";
import {Jumbotron, Container, Modal} from "react-bootstrap"
import terriPicture from "./AboutUsImage"
import {useArticle} from "../../contexts/ArticleContext"

export default function AboutUs() {
  
  const [profileImage, setProfileImage] = useState({
      title: "About Us image",
      link: terriPicture.image,
      alt: terriPicture.alt
  })


  const {articleData, aboutUsImage} = useArticle()


  const [aboutUsHeading, setAboutUsHeading] = useState({
    title: "About us heading",
    label: "Terri Louise Dickens"
  })


  const [aboutUsContent, setAboutUsContent] = useState({
    title: "About us content",
    label: "Caring and Professional",
    article: "Terri has had a long succesful career working in education as a school psychologist, and in healthcare as a . Terri has always believed that to help people the most important thing is to see them as they see themselves. Terri believes in supporting people with cognitive behavioral strategies to help them reach their goals"
  })

  useEffect( () =>{
    console.log(aboutUsImage)
    try {
      if(articleData){
    let data = articleData
    
    let aboutUsHeadingData = data.find((article) => article.title === aboutUsHeading.title)
    
    setAboutUsHeading(aboutUsHeadingData)

    let aboutUsContentData = data.find((article) => article.title === aboutUsContent.title)

    setAboutUsContent(aboutUsContentData)
}
if(aboutUsImage){
  console.log("aboutUsImageLoaded")
  let image = aboutUsImage
    let profileImageData = {
      title: profileImage.title,
      link: image,
      alt: profileImage.alt,
    }
    
    setProfileImage(profileImageData)
    
    console.log("UseEffect ran" + profileImage.link)
  }
    }
    catch (error){
      console.log(error)
    }
  }, [articleData, aboutUsImage])


  return (
    <>
    <div className="content edit-about-us-content">
    <div className="about-us-container" >
    <Jumbotron fluid className="about-us-content">
    <Container className="about-us-content ">
      <h1 className="about-us-content mt-3 pt-5" >{aboutUsHeading.label}</h1>
      <h1 className="about-us-content pt-2">{aboutUsContent.label}</h1>
      <hr/>
      <h3 className="about-us-content mt-1 p-1"  >{aboutUsContent.article}</h3>
      <img className="about-us-image border-secondary rounded shadow mt-5" src={profileImage.link} alt={profileImage.alt} />


    </Container>
    </Jumbotron>

    </div>
    </div>
    </>
  );
}
