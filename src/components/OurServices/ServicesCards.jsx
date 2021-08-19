import React from 'react';
import Card from "./Card"
import {Jumbotron} from "react-bootstrap"



export default function ServicesCards (){

    const cardOneTitle = "Play Therapy"
    const cardTwoTitle = "Children and Adolescent Therapy"
    const cardThreeTitle = "Neurodiversity"
    const cardFourTitle = "Trauma"
    const cardFiveTitle = "Relationships"
    const cardSixTitle = "Women"
    const cardSevenTitle = "Attachment"
    const cardEightTitle = "Mood Disorders"
    const cardNineTitle = "Supportiveness"

    const cardOneText = "We practive play therapy for children. Yes even online!"
    const cardTwoText = "Terri has extensive experience, and training in helping youth."
    const cardThreeText = "We know that brain differences are normal."
    const cardFourText = "Terri has extensive training, and experience in dealing with trauma"
    const cardFiveText = "Sometimes having a non judgemental professional listen to your problems can help"
    const cardSixText = "We provide a safe place to discuss what is important to you"
    const cardSevenText = "Terri has extensive training, and experience in helping people with attachment difficulties"
    const cardEightText = "Terri has extensive training, and experience in helping people who suffer from various mood disorders"
    const cardNineText = "Terri provides a caring and supportive environment"

    return(
        <>

        <div  className="container h-100 mt-5 services-content">
        <div  className="row my-3 h-35 py-3 services-content">
        <div   className="card-box col-md mt-2 services-content">
        <Card  title={cardOneTitle} text={cardOneText}></Card>
        </div>
        <div   className="card-box col-md mt-2 services-content">
        <Card title={cardTwoTitle} text={cardTwoText}></Card>
        </div>
        <div   className="card-box col-md mt-2 services-content">
        <Card title={cardThreeTitle} text={cardThreeText}></Card>
        </div>
        </div>
        <div  className="row my-3 h-35 py-3 services-content">
        <div   className="card-box col-md mt-2 services-content">
        <Card title={cardFourTitle} text={cardFourText}></Card>
        </div>
        <div   className="card-box col-md mt-2 services-content">
        <Card title={cardFiveTitle} text={cardFiveText}></Card>
        </div>
        <div   className="card-box col-md mt-2 services-content">
        <Card title={cardSixTitle} text={cardSixText}></Card>
        </div>
        </div>
        <div  className="row my-3 h-35 py-3 services-content">
        <div   className="card-box col-md mt-2 services-content">
        <Card title={cardSevenTitle} text={cardSevenText}></Card>
        </div>
        <div   className="card-box col-md mt-2 services-content">
        <Card title={cardEightTitle} text={cardEightText}></Card>
        </div>
        <div   className="card-box col-md mt-2 services-content">
        <Card title={cardNineTitle} text={cardNineText}></Card>
        </div>
        </div>
        </div>
        </>

    )

}