import React, {useState, useEffect} from "react";
import ServicesCards from "./ServicesCards.jsx";
import {Button, Jumbotron, Container, Modal} from "react-bootstrap"
import EditModal from "../EditModal/EditModal"
import {useArticle} from "../../../contexts/ArticleContext"
import {useAuth} from "../../../contexts/AuthContext"
import {useHistory} from "react-router-dom"

export default function EditServices() {

  const history = useHistory()
  
  const {logout} = useAuth()


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

  const {articleData} = useArticle()

  const [servicesHeading, setServicesHeading] = useState({
    title: "Services heading",
    label: "Best Life Counseling",
    article: "We offer many services, We specialize in the following"
  })


  const [edit, setEdit] = useState({
    open: false,
    title: "",
    label: "",
    article: ""
  })
  
  function reset(){
    setEdit({
      open: false,
      title: "",
      label: "",
      article: ""
    })
  }

  useEffect( () =>{
    try {
      
    let data = articleData
    
      console.log(data)

    let servicesHeadingData = data.find((article) => article.title === servicesHeading.title)

    setServicesHeading(servicesHeadingData)
    
    }
    catch (error){
      console.log(error)
    }
  }, [articleData])
  


  return (
    <>
    <div className="services-main-content edit-services-content">
    <h1 className="mt-5 p-2">Click an Area To Edit</h1>
    <Button disabled={loading} className="m-2 btn-primary rounded" onClick={processLogout}>Logout</Button>
        <Button className="m-2 btn-primary rounded" onClick={() => history.push("/edit-home")}>Edit Home Page</Button>
        <Button className="m-2 btn-primary rounded" onClick={() => history.push("/edit-about-us")}>Edit About Us Page</Button>
        <Button className="m-2 btn-primary rounded" onClick={() => history.push("/edit-services")}>Edit Services Page</Button>
    <Modal show={edit.open} onHide={reset}>
    
      <EditModal title={edit.title} label={edit.label} article= {edit.article} />
    </Modal>
    <Jumbotron fluid className="-content">
      <Container className="services-content">
      <div onClick={() =>setEdit({
        open: true,
        title: servicesHeading.title,
        label: servicesHeading.label,
        article: servicesHeading.article
      })}>
        <h1 className="services-content mt-1 pt-5">{servicesHeading.label} </h1>
        <hr/>
        <h3 className="services-content pt2">{servicesHeading.article}</h3>
        </div>
      </Container>
    </Jumbotron>
    <ServicesCards setEdit={setEdit} />
    </div>

    </>
  );
}
