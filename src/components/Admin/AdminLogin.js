import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import { Card, Button } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext"
import { useHistory} from "react-router-dom"

export default function ContactForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const { login, resetPassword }= useAuth()
  const [error, setError] = useState("")
  const history = useHistory()


  async function sendEmail(event){

    try{
        setLoading(true)
        setError("")
        await resetPassword("landreth41@gmail.com")

    } catch(error) {
        setError(error.message)
        console.log(error)
    }  
    setLoading(false)
}
  async function handleSubmit(event){
    event.preventDefault()

    try{
        setLoading(true)
        setError("")
        await login(emailRef.current.value, passwordRef.current.value)
        history.push("/admin-panel")
    } catch(error) {
        setError(error.message)
        console.log(error)
    }  
    setLoading(false)
}
  

  return (
    <div className="form-container mt-0">
      <Card className="contact-card" style={{ width: "100rem" }}>
        <Card.Body className="contact-card-body">
          <h1 className="form-title">Log in to manage your website</h1>
          <Form className="form" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                ref={emailRef}
                placeholder="User Name"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Enter your password"
              ></Form.Control>
            </Form.Group>
            
            <Button
              disabled={loading}
              type="submit"
              variant="secondary"
              className="contact-button"
              size="lg"
              block
            >
              Submit
            </Button>
            <Button variant="secondary" className="contact-button" disabled={loading} size="lg" block onClick={sendEmail}>Send Password Reset Email</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
