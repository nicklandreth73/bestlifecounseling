import React , {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function FooterIcon ({icon, link}){
    const [iconType, setIconType] = useState()
    useEffect(() =>{
        switch(icon){
            case "facebook":
                setIconType(faFacebookSquare)
                break
            case "email":
                setIconType(faEnvelope)
                break
            default:
                setIconType(null)
        }
    },[])
    

    return(
        <>
        <a href={link} className="footer-icon">
            <FontAwesomeIcon className="footer-icon p-1 mx-5" icon={iconType} > </FontAwesomeIcon>
            </a>
        </>

    )

}