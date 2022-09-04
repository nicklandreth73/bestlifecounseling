import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { useAuth } from "../../contexts/AuthContext"
import { useLocation } from "react-router-dom"

export default function FooterIcon({ icon, link }) {
  const { currentUser } = useAuth()
  const location = useLocation()
  const [iconType, setIconType] = useState()
  useEffect(() => {
    switch (icon) {
      case "facebook":
        setIconType(faFacebookSquare)
        break
      case "email":
        setIconType(faEnvelope)
        break
      default:
        setIconType(null)
    }
  }, [])

  return (
    <>
      {!currentUser || location.pathname.slice(1, 5) !== "edit" ? (
        <FontAwesomeIcon className="footer-icon p-1 mx-5" icon={iconType}>
          {" "}
        </FontAwesomeIcon>
      ) : (
        <a href={link} className="footer-icon">
          <FontAwesomeIcon className="footer-icon p-1 mx-5" icon={iconType}>
            {" "}
          </FontAwesomeIcon>
        </a>
      )}
    </>
  )
}
