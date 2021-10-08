import React, {useState} from 'react';
import { Alert, Modal, Form, Button } from "react-bootstrap"
import { useArticle } from "../../../contexts/ArticleContext"
import { useAuth } from "../../../contexts/AuthContext"
import axios from "axios"


export default function EditModal ({title, label, article}){
 
        const {currentUser} = useAuth()
        const [fileName, setFileName] = useState();
        const [file, setFile] = useState();
        const [loading, setLoading] = useState(false);
        const [preview, setPreview] = useState();
        const [error, setError] = useState();
      

        function onFileChange(event) {
          setPreview(URL.createObjectURL(event.target.files[0]));
          setFileName(event.target.files[0].name);
          setFile(event.target.files[0]);
        }
      

 



    async function saveChange(event){
        event.preventDefault();
        if(!currentUser) return
        event.preventDefault();
      
          let formData = new FormData();
      
          await formData.append("picture", file);
      
          try {
            setError("");
            console.log(formData.keys());
            await axios({
              url: "api/upload-image",
              method: "POST",
              data: formData,
            });
          } catch (error) {
            setError(error.message);
          }

    }

    return(

        <>
            <Modal.Header closeButton  >Editing {title}</Modal.Header>
            <Modal.Body className="form">
            {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={saveChange}>
          <Form.Label style={{ display: "block" }}>
            Add A Profile Picture
          </Form.Label>
          <Form.Group id="picture">
            <Form.File id="formcheck-api-custom" custom>
              <Form.File.Input onChange={onFileChange} />
              <Form.File.Label data-browse="Button text">
                {fileName}
              </Form.File.Label>
            </Form.File>
          </Form.Group>
          <Button disabled={loading} type="submit" className="w-100">
            Sumbit Photo
          </Button>
        </Form>
            </Modal.Body>
        </>

    )

}