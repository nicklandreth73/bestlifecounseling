import React from 'react';
import Card from "./Card"
import {Jumbotron} from "react-bootstrap"



export default function HomeCards (){

    const cardOneTitle = "Affirming Therapy"
    const cardTwoTitle = "Modern Effective Therapy"
    const cardThreeTitle = "Person Centered Therapy"

    const cardOneText = "We recognize the struggles of clients who's sexuality, and or gender may be in the minority."
    const cardTwoText = "Consistent training in the most up to date methods, ensures we can provide you with the best care possible."
    const cardThreeText = "We take a humanistic approach to therapy. We are concerned with how you view yourself rather than making our own interpretations"

    return(
        <>
        
        <div className="home-card-container home-card-content">
        <Jumbotron> 
        <h1 className="text-center">We specialize in</h1>
        </Jumbotron>
        <div  className="container h-100 home-card-content">
        <div  className="row my-5 h-75 home-card-content">
        <div   className="card-box col-md mt-2 home-card-content">
        <Card  title={cardOneTitle} text={cardOneText}></Card>
        </div>
        <div   className="card-box col-md mt-2 home-card-content">
        <Card title={cardTwoTitle} text={cardTwoText}></Card>
        </div>
        <div   className="card-box col-md mt-2 home-card-content">
        <Card title={cardThreeTitle} text={cardThreeText}></Card>
        </div>
        </div>
        </div>
        </div>
        </>

    )

}