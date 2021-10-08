import React, {useState, useEffect} from 'react';
import Card from "./Card"
import {useArticle} from "../../../contexts/ArticleContext"



export default function ServicesCards ({setEdit}){

    const {articleData} = useArticle()

    const [cardOne, setCardOne] = useState({
        title: "Service Card One",
        label: "Play Therapy",
        article: "We practive play therapy for children. Yes even online!"
    })
    const [cardTwo, setCardTwo] = useState({
        title: "Service Card Two",
        label: "Children and Adolescent Therapy",
        article: "Terri has extensive experience, and training in helping youth."
    })
    const [cardThree, setCardThree] = useState({
        title: "Service Card Three",
        label: "Neurodiversity",
        article: "We know that brain differences are normal."
        
    })
    const [cardFour, setCardFour] = useState({
        title: "Service Card Four",
        label: "Trauma",
        article: "Terri has extensive training, and experience in dealing with trauma"
        
    })
    const [cardFive, setCardFive] = useState({
        title: "Service Card Five",
        label: "Relationships",
        article: "Sometimes having a non judgemental professional listen to your problems can help"
        
    })
    const [cardSix, setCardSix] = useState({
        title: "Service Card Six",
        label: "Women",
        article: "We provide a safe place to discuss what is important to you"
        
    })
    const [cardSeven, setCardSeven] = useState({
        title: "Service Card Seven",
        label: "Attachment",
        article: "Terri has extensive training, and experience in helping people with attachment difficulties"
        
    })
    const [cardEight, setCardEight] = useState({
        title: "Service Card Eight",
        label: "Mood Disorders",
        article: "Terri has extensive training, and experience in helping people who suffer from various mood disorders"
        
    })
    const [cardNine, setCardNine] = useState({
        title: "Service Card Nine",
        label: "Supportiveness",
        article: "Terri provides a caring and supportive environment"
    })


    useEffect( () =>{
        try {
        let data = articleData
        
        let cardOneData = data.find((article) => article.title === cardOne.title)
        let cardTwoData = data.find((article) => article.title === cardTwo.title)
        let cardThreeData = data.find((article) => article.title === cardThree.title)
        let cardFourData = data.find((article) => article.title === cardFour.title)
        let cardFiveData = data.find((article) => article.title === cardFive.title)
        let cardSixData = data.find((article) => article.title === cardSix.title)
        let cardSevenData = data.find((article) => article.title === cardSeven.title)
        let cardEightData = data.find((article) => article.title === cardEight.title)
        let cardNineData = data.find((article) => article.title === cardNine.title)


        setCardOne(cardOneData)
        setCardTwo(cardTwoData)
        setCardThree(cardThreeData)
        setCardFour(cardFourData)
        setCardFive(cardFiveData)
        setCardSix(cardSixData)
        setCardSeven(cardSevenData)
        setCardEight(cardEightData)
        setCardNine(cardNineData)


        }
        catch (error){
          console.log(error)
        }
      }, [articleData])
      
      





    return(
        <>

        <div  className="container h-100 mt-5 services-content">
        <div  className="row my-3 h-35 py-3 services-content">
        <div   className="card-box col-md mt-2 services-content"onClick={(event) => {
                event.stopPropagation()
                setEdit({
                open:true,
                title: cardOne.title,
                label: cardOne.label,
                article: cardOne.article
            })
        }}>
        <Card  label={cardOne.label} article={cardOne.article} ></Card>
        </div>
        <div   className="card-box col-md mt-2 services-content"onClick={(event) => {
                event.stopPropagation()
                setEdit({
                open:true,
                title: cardTwo.title,
                label: cardTwo.label,
                article: cardTwo.article
            })
        }}>
        <Card label={cardTwo.label} article={cardTwo.article} ></Card>
        </div>
        <div   className="card-box col-md mt-2 services-content" onClick={(event) => {
                event.stopPropagation()
                setEdit({
                open:true,
                title:cardThree.title,
                label: cardThree.label,
                article: cardThree.article
            })
        }}>
        <Card label={cardThree.label} article={cardThree.article} ></Card>
        </div>
        </div>
        <div  className="row my-3 h-35 py-3 services-content">
        <div   className="card-box col-md mt-2 services-content" onClick={(event) => {
                event.stopPropagation()
                setEdit({
                open:true,
                title: cardFour.title,
                label: cardFour.label,
                article: cardFour.article
            })
        }}>
        <Card label={cardFour.label} article={cardFour.article}></Card>
        </div>
        <div   className="card-box col-md mt-2 services-content" onClick={(event) => {
                event.stopPropagation()
                setEdit({
                open:true,
                title: cardFive.title,
                label: cardFive.label,
                article: cardFive.article
            })
        }}>
        <Card label={cardFive.label} article={cardFive.article}></Card>
        </div>
        <div   className="card-box col-md mt-2 services-content" onClick={(event) => {
                event.stopPropagation()
                setEdit({
                open:true,
                title: cardSix.title,
                label: cardSix.label,
                article: cardSix.article
            })
        }}>
        <Card label={cardSix.label} article={cardSix.article}></Card>
        </div>
        </div>
        <div  className="row my-3 h-35 py-3 services-content">
        <div   className="card-box col-md mt-2 services-content" onClick={(event) => {
                event.stopPropagation()
                setEdit({
                open:true,
                title: cardSeven.title,
                label: cardSeven.label,
                article: cardSeven.article
            })
        }}>
        <Card label={cardSeven.label} article={cardSeven.article}></Card>
        </div>
        <div   className="card-box col-md mt-2 services-content" onClick={(event) => {
                event.stopPropagation()
                setEdit({
                open:true,
                title: cardEight.title,
                label: cardEight.label,
                article: cardEight.article
            })
        }}>
        <Card label={cardEight.label} article={cardEight.article}></Card>
        </div>
        <div   className="card-box col-md mt-2 services-content" onClick={(event) => {
                event.stopPropagation()
                setEdit({
                open:true,
                title: cardNine.title,
                label: cardNine.label,
                article: cardNine.article
            })
        }}>
        <Card label={cardNine.label} article={cardNine.article}></Card>
        </div>
        </div>
        </div>
        </>

    )

}