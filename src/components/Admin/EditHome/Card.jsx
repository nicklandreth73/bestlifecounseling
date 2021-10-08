import React, {useState} from 'react';
import {Card} from "react-bootstrap"

export default function Home ({title, text}){

    const borderStyleUnhovered = {
        borderStyle: " solid",
        borderRadius: "20px",
        borderWidth: " .3px",

    }
    const borderStyleHovered = {
        borderStyle: "solid",
        borderRadius: "20px",
        borderWidth: " 1.5px",

    }
    const innerBorder = {
        borderStyle: "solid",
        borderRadius: "20px",
        borderWidth: " 1.5px",
        boxShadow: "0 0 20px 1vh rgb(47,93,98)",
        background: "rgb(47,93,98)",
        background: "linear-gradient(90deg, rgba(242, 242, 242,1) 0%, rgba(191, 191, 191,1) 50%, rgba(179, 179, 179,1) 100%)"
    }
    const innerColor = {
        background: "inherit",
        borderRadius: "5px",
    }


    const [borderStyle, setBorderStyle] = useState(borderStyleUnhovered)
    

    
    return(

 
    

        <Card 
        className="home-card h-100 shadow-lg bg-light"  
        onMouseEnter={() => setBorderStyle(borderStyleHovered)} 
        onMouseLeave={() => setBorderStyle(borderStyleUnhovered)} 
        style={borderStyle}
        >
        <Card.Body style={innerBorder}>
        <Card.Title className="p-3" style={innerColor}>{title}</Card.Title>
        <Card.Text className="p-1 mt-5" style={innerColor}>{text}</Card.Text>
        </Card.Body>
    </Card>

    )

}