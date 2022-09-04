import React, { useState, useEffect } from "react"
import FooterIcon from "./FooterIcon"
import { Modal } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { useArticle } from "../../contexts/ArticleContext"
import { useLocation } from "react-router-dom"
import EditModal from "../Admin/EditModal/EditModal"

export default function Footer() {
  const { currentUser } = useAuth()
  const location = useLocation()
  const { articleData } = useArticle()

  const [edit, setEdit] = useState({
    open: false,
    title: "",
    label: "",
    article: "",
  })

  const [footerLinks, setFooterLinks] = useState({
    title: "FooterLinks",
    label: "https://www.facebook.com/therapysecure",
    article: "counselingbestlife@gmail.com",
  })

  useEffect(() => {
    try {
      if (articleData) {
        // sets data array to all articles
        let data = articleData

        let footerLinksData = data.find(
          (article) => article.title === footerLinks.title
        )

        setFooterLinks(footerLinksData)
      }
    } catch (error) {
      console.log(error)
    }
  }, [articleData])

  function reset() {
    setEdit({
      open: false,
      title: "",
      label: "",
      article: "",
    })
  }

  return (
    <>
      <Modal show={edit.open} onHide={reset}>
        <EditModal
          title={edit.title}
          label={edit.label}
          article={edit.article}
        />
      </Modal>
      <footer
        className="footer"
        onClick={() => {
          setEdit({
            open: true,
            title: footerLinks.title,
            label: footerLinks.label,
            article: footerLinks.article,
          })
        }}
      >
        <div className="footer-bottom text-center p-3">
          <FooterIcon
            icon="facebook"
            link="https://www.facebook.com/dickenscounseling/"
          />
          <FooterIcon
            icon="email"
            link="mailto:bestlifecounseling@therapysecure.net"
          />
        </div>
      </footer>
    </>
  )
}
