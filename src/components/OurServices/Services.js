import React, {useState, useEffect} from "react";
import ServicesCards from "./ServicesCards.jsx";
import {Jumbotron, Container, Modal} from "react-bootstrap"
import EditModal from "../Admin/EditModal/EditModal"
import {useArticle} from "../../contexts/ArticleContext"

export default function Services() {

  const articleData = useArticle()

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
    
    let servicesHeadingData = data.find((article) => article.title === servicesHeading.title)

    setServicesHeading(servicesHeadingData)
    
    }
    catch (error){
      console.log(error)
    }
  }, [articleData])


  return (
    <>
    <div className="services-main-content">
    <h1>Click an Area To Edit</h1>
    <Modal show={edit.open} onHide={reset}>
    
      <EditModal title={edit.title} label={edit.label} article= {edit.article} />
    </Modal>
    <Jumbotron fluid className="-content">
      <Container className="services-content">
        <h1 className="services-content mt-1 pt-5">{servicesHeading.label}</h1>
        <hr/>
        <h3 className="services-content pt2">{servicesHeading.article} </h3>
      </Container>
    </Jumbotron>
    <ServicesCards setEdit={setEdit} />
    </div>

    </>
  );
}
