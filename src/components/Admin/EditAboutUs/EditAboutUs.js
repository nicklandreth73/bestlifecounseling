import React, {useState, useEffect} from "react";
import {Button, Jumbotron, Container, Modal} from "react-bootstrap"
import terriPicture from "./AboutUsImage"
import EditModal from "../EditModal/EditModal"
import EditPictureModal from "../EditModal/EditPictureModal"
import {useArticle} from "../../../contexts/ArticleContext"
import {useAuth} from "../../../contexts/AuthContext"
import {useHistory} from "react-router-dom"

export default function EditAboutUs() {
  const history = useHistory()
  
  const {logout} = useAuth()

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState("")
  const [profileImage, setProfileImage] = useState({
      title: "About Us image",
      link: terriPicture.image,
      alt: terriPicture.alt
  })

  async function processLogout(){
        
    try{
        setLoading(true)
        setError("")
        await logout()
        history.push("/")
    } catch(error) {
        setError(error.message)
        console.log(error)
    }  
    setLoading(false)
  }

  const {articleData, aboutUsImage} = useArticle()

  const [edit, setEdit] = useState({
    open: false,
    title: "",
    label: "",
    article: "",
    isPicture: false
  })

  function reset(){
    setEdit({
      open: false,
      title: "",
      label: "",
      article: "",
      isPicture: false
    })
  }

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
    <h1 className="mt-5 p-2">Click an Area To Edit</h1>
    <Button disabled={loading} className="m-2 btn-primary rounded" onClick={processLogout}>Logout</Button>
        <Button className="m-2 btn-primary rounded" onClick={() => history.push("/edit-home")}>Edit Home Page</Button>
        <Button className="m-2 btn-primary rounded" onClick={() => history.push("/edit-about-us")}>Edit About Us Page</Button>
        <Button className="m-2 btn-primary rounded" onClick={() => history.push("/edit-services")}>Edit Services Page</Button>
        <Modal show={edit.open} onHide={reset}>
    <EditModal title={edit.title} label={edit.label} article= {edit.article}/>
    </Modal>
    <Modal show={edit.isPicture && edit.open} onHide={reset}>
    <EditPictureModal title={edit.title} label={edit.label} />
    </Modal>
    <div className="about-us-container" >
    <Jumbotron fluid className="about-us-content">
    <Container className="about-us-content ">
      <h1 className="about-us-content mt-3 pt-5" onClick={() => {
            
            setEdit({
            open: !edit.open,
            title: aboutUsHeading.title,
            label: aboutUsHeading.label,
            isPicture: false
          })
          console.log(aboutUsHeading.title)
          }
          }>{aboutUsHeading.label}</h1>
      <h1 className="about-us-content pt-2" onClick={() => {
            
            setEdit({
            open: !edit.open,
            title: aboutUsContent.title,
            label: aboutUsContent.label,
            article: aboutUsContent.article,
            isPicture: false
          })
          }}>{aboutUsContent.label}</h1>
      <hr/>
      <h3 className="about-us-content mt-1 p-1" onClick={() => {
            
            setEdit({
            open: !edit.open,
            title: aboutUsContent.title,
            label: aboutUsContent.label,
            article: aboutUsContent.article,
            isPicture: false
          })
          }} >{aboutUsContent.article}</h3>
      <img src={profileImage.link} alt={profileImage.alt} className="about-us-image border-secondary rounded shadow mt-5" onClick={() => {
            
            setEdit({
            open: !edit.open,
            title: aboutUsHeading.title,
            label: aboutUsHeading.label,
            isPicture: true
          })
          }}/>


    </Container>
    </Jumbotron>

    </div>
    </div>
    </>
  );
}
