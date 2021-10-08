import React, {useState, useEffect} from "react";
import { Carousel, Button, Modal } from "react-bootstrap";
import HomeCarouselPictures from "./HomeCarouselPictures";
import HomeCards from "./HomeCards";
import EditModal from "../EditModal/EditModal"
import {useArticle} from "../../../contexts/ArticleContext"
import {useAuth} from "../../../contexts/AuthContext"
import {useHistory} from "react-router-dom"


export default function EditHome() {

  const history = useHistory()
  
  const {logout} = useAuth()

  const {getArticle, articleData} = useArticle();

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState("")

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


const [edit, setEdit] = useState({
  open: false,
  title: "",
  label: "",
  article: ""
})


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

useEffect( () =>{
  try {
  if(articleData){let slides = articleData
  slides = slides.filter((article) => article.title === "A path through a bright green forest" || article.title === "A calming waterfall in the forest")
  setCarouselData(slides)
  }
  }
  catch (error){
    console.log(error)
  }
}, [articleData])






function reset(){
  setEdit({
    open: false,
    title: "",
    label: "",
    article: ""
  })
}



  return (
    <> 
    <div className="content">
    <h1 className="mt-5 p-2">Click an Area To Edit</h1>
    <Button disabled={loading} className="m-2 btn-primary rounded" onClick={processLogout}>Logout</Button>
        <Button className="m-2 btn-primary rounded" onClick={() => history.push("/edit-home")}>Edit Home Page</Button>
        <Button className="m-2 btn-primary rounded" onClick={() => history.push("/edit-about-us")}>Edit About Us Page</Button>
        <Button className="m-2 btn-primary rounded" onClick={() => history.push("/edit-services")}>Edit Services Page</Button>
    <Modal show={edit.open} onHide={reset}>
    
      <EditModal title={edit.title} label={edit.label} article= {edit.article} />
    </Modal>
      <Carousel interval={null} fade={true} variant="dark" nextLabel="" prevLabel="">
        {HomeCarouselPictures.map((image) => (
          <Carousel.Item key={image.image} onClick={() => {
            
            setEdit({
            open: !edit.open,
            title: (image.slideNumber)? carouselData[1].title: carouselData[0].title,
            label:(image.slideNumber)? carouselData[1].label: carouselData[0].label,
            article: (image.slideNumber)? carouselData[1].article: carouselData[0].article,
          })
          }}>
            <Carousel.Caption >
              <h1 style={image.color && {color: image.color}}>{(image.slideNumber)? carouselData[1].label: carouselData[0].label}</h1>
              <Button className="btn-lg btn-block mt-3">{(image.slideNumber)? carouselData[1].article : carouselData[0].article}</Button>
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
      <HomeCards setEdit={setEdit} style={{backGroundColor: "#cbe3e6"}} />
    </>
  );
}
