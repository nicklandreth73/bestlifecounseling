import React, {useState, useEffect} from 'react';
import Card from "./Card"
import {Jumbotron} from "react-bootstrap"
import {useArticle} from "../../../contexts/ArticleContext"



export default function HomeCards ({setEdit}){
    const {getArticle, articleData} = useArticle();

    const [cardAreaTitle, setCardAreaTitle] = useState("We specialize in")


    const [cardOne, setCardOne] = useState({
        title: "Home Card One",
        label: "Affirming Therapy", 
        article: "We recognize the struggles of clients who's sexuality, and or gender may be in the minority."
    })
    const [cardTwo, setCardTwo] = useState({
        title: "Home Card Two",
        label: "Modern Effective Therapy", 
        article: "Consistent training in the most up to date methods, ensures we can provide you with the best care possible."
    })
    const [cardThree, setCardThree] = useState({
        title: "Home Card Three",
        label: "Person Centered Therapy", 
        article: "We take a humanistic approach to therapy. We are concerned with how you view yourself rather than making our own interpretations"
    })


   
    useEffect( () =>{
        try {

            if(articleData){
                // sets data array to all articles
                let data = articleData
                console.log(data)
        
                // sets title to title article
                let title =  data.find((article) => article.title === "Card Area Title").label
                console.log("Title: " + title)
                setCardAreaTitle(title)
        
                //sets cards to card articles
        
                let cardOneData = data.find((article) => article.title === cardOne.title)
                let cardTwoData = data.find((article) => article.title === cardTwo.title)
                let cardThreeData = data.find((article) => article.title === cardThree.title)
        
                setCardOne((prev) => ({cardOneData, ...prev}))
                setCardTwo((prev) => ({cardTwoData, ...prev}))
                setCardThree((prev) => ({cardThreeData, ...prev}))
                
        
                }
            } 
        catch (error){
          console.log(error)
        }
      }, [articleData])



    return(
        <>
        
        <div className="home-card-container home-card-content" onClick={()=>{
            setEdit({
                open:true,
                title: "Card Area Title",
                label: cardAreaTitle
            })
        }} >
        <Jumbotron> 
        <h1 className="text-center">{cardAreaTitle}</h1>
        </Jumbotron>
        <div  className="container h-100 home-card-content">
        <div  className="row my-5 h-75 home-card-content">
        <div   className="card-box col-md mt-2 home-card-content" onClick={(event) => {
                event.stopPropagation()
                setEdit({
                open:true,
                title: cardOne.title,
                label: cardOne.label,
                article: cardOne.article
            })
        }} >
        <Card  title={cardOne.label || ""} text={cardOne.article || ""}  ></Card>
        </div>
        <div   className="card-box col-md mt-2 home-card-content" onClick={(event) => {
                event.stopPropagation()
                setEdit({
                open:true,
                title: cardTwo.title,
                label: cardTwo.label,
                article: cardTwo.article
            })
        }} >
        <Card title={cardTwo.label || ""} text={cardTwo.article || ""}></Card>
        </div>
        <div   className="card-box col-md mt-2 home-card-content" onClick={(event) => {
                event.stopPropagation()
                setEdit({
                open:true,
                title: cardThree.title,
                label: cardThree.label,
                article: cardThree.article
            })
        }} >
        <Card title={cardThree.label || ""} text={cardThree.article || ""}></Card>
        </div>
        </div>
        </div>
        </div>
        </>

    )

}