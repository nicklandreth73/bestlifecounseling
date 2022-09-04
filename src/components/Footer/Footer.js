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

  const [footerTitle, setFooterTitle] = useState({
    title: "Footer Title",
    label: "Best Life Counseling",
  })

  const [footerText, setFooterText] = useState({
    title: "Footer Text",
    label: "Terri Dickens",
    article: "Licensed Clinical Social Worker",
  })

  const [footerLinks, setFooterLinks] = useState({
    title: "Footer Links",
    label: "https://www.facebook.com/therapysecure",
    article: "counselingbestlife@gmail.com",
  })

  useEffect(() => {
    try {
      if (articleData) {
        // sets data array to all articles
        let data = articleData

        let footerData = data.find(
          (article) => article.title === footerTitle.title
        )

        setFooterTitle(footerData)

        let footerTextData = data.find(
          (article) => article.title === footerText.title
        )

        setFooterText(footerTextData)

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
      <footer className="footer">
        <div className="footer-top pt-2">
          <h1
            className="footer-text text-center"
            onClick={() => {
              if (!currentUser || location.pathname.slice(1, 5) !== "edit")
                return
              setEdit({
                open: !edit.open,
                title: footerTitle.title,
                label: footerTitle.label,
              })
            }}
          >
            {footerTitle.label}
          </h1>
          <h3
            className="footer-text text-center"
            onClick={() => {
              if (!currentUser || location.pathname.slice(1, 5) !== "edit")
                return
              setEdit({
                open: !edit.open,
                title: footerText.title,
                label: footerText.label,
                article: footerText.article,
              })
            }}
          >
            {footerText.label}
          </h3>
          <h5
            className="footer-text text-center"
            onClick={() => {
              if (!currentUser || location.pathname.slice(1, 5) !== "edit")
                return
              setEdit({
                open: !edit.open,
                title: footerText.title,
                label: footerText.label,
                article: footerText.article,
              })
            }}
          >
            {footerText.article}
          </h5>
        </div>
        <hr className="footer-split" />

        <div
          className="footer-bottom text-center p-3"
          onClick={() => {
            if (!currentUser || location.pathname.slice(1, 5) !== "edit") return
            setEdit({
              open: !edit.open,
              title: footerLinks.title,
              label: footerLinks.label,
              article: footerLinks.article,
            })
          }}
        >
          <FooterIcon icon="facebook" link={footerLinks.label} />
          <FooterIcon icon="email" link={`mailto:${footerLinks.article}`} />
        </div>
      </footer>
    </>
  )
}
