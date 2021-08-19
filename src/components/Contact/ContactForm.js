import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import { Card, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  function sendForm(event) {
    event.preventDefault();
    let templateParams = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
    };
    emailjs
      .send(
        "default_service",
        "template_nesfipu",
        templateParams,
        "user_TLXygmes6KegCbj2RGdPc"
      )
      .then(
        function (response) {
          alert("Your information has been sent to bestlifecounseling@therapysecure.net.");
          console.log(response.status, response.text);
          firstNameRef.current.value = "";
          lastNameRef.current.value = "";
          emailRef.current.value = "";
          phoneRef.current.value = "";
          messageRef.current.value = "";
        },
        function (error) {
          alert(
            "There was an error sending your information to bestlifecounseling@therapysecure.net."
          );
          console.log("FAILED...", error);
        }
      );

  }

  return (
    <div className="form-container">
      <Card className="contact-card" style={{ width: "100rem" }}>
        <Card.Body className="contact-card-body">
          <h1 className="form-title">How can we help you?</h1>
          <Form className="form" onSubmit={sendForm}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                ref={firstNameRef}
                placeholder="First Name"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                ref={lastNameRef}
                placeholder="Last Name"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="you@gmail.com"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phone"
                ref={phoneRef}
                placeholder="+1-555-555-5555"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control ref={messageRef} as="textarea"></Form.Control>
            </Form.Group>
            <Button
              type="submit"
              variant="secondary"
              className="contact-button"
              size="lg"
              block
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
