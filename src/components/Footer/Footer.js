import React from "react";
import FooterIcon from "./FooterIcon"


export default function Footer() {


  return(
      <>
      <footer className="footer">
      <div className="footer-top pt-2">
        <h1 className="footer-text text-center">Best Life Counseling </h1>
        <h3 className="footer-text text-center">Terri Dickens</h3>
        <h5 className="footer-text text-center">Licensed Clinical Social Worker</h5>
      </div>
      <hr className="footer-split" />

      <div className="footer-bottom text-center p-3">
        <FooterIcon  icon="facebook" link="https://www.facebook.com/dickenscounseling/" />
        <FooterIcon  icon="email" link="mailto:bestlifecounseling@therapysecure.net" />
      </div>

      </footer>
    </>
  )
}
