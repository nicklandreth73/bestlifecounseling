import React, {useRef} from 'react';
import { Modal, Form, Button } from "react-bootstrap"
import { useArticle } from "../../../contexts/ArticleContext"
import { useAuth } from "../../../contexts/AuthContext"

export default function EditModal ({title, label, article}){
        const labelRef = useRef(null);
        const articleRef = useRef(null);
        const {currentUser} = useAuth()
        const {updateArticle} = useArticle();

 



    function saveChange(event){
        event.preventDefault();
        console.log("title: " + title)
        if(!currentUser) return
        console.log(currentUser)
        console.log(labelRef.current.value, articleRef.current)
        if(labelRef.current && !articleRef.current){
          updateArticle(title, labelRef.current.value, null)
          label && console.log(`Label: ${labelRef.current.value}`)
          return
        }
        label && console.log(`Label: ${labelRef.current.value}`)
        article && console.log(`Article: ${articleRef.current.value}`)
        if( !labelRef && !articleRef) return
        updateArticle(title, labelRef.current.value, articleRef.current.value)

    }

    return(

        <>
            <Modal.Header closeButton  >Editing {title}</Modal.Header>
            <Modal.Body className="form">
          <Form className="form" onSubmit={saveChange}>
            <Form.Group>
              <Form.Label>Edit Heading</Form.Label>
              <Form.Control
                type="text"
                ref={labelRef}
                defaultValue={label}
              ></Form.Control>
            </Form.Group>
            {article &&<Form.Group>
             <Form.Label>Edit Article</Form.Label>
              <Form.Control
                as="textarea"
                ref={articleRef}
                defaultValue={article}
                rows={15}
              ></Form.Control>
            </Form.Group>}
            
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
            </Modal.Body>
        </>

    )

}