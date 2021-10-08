import React, {useState} from 'react';
import { Button } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory} from "react-router-dom"

export default function AdminPanel (){
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const {logout} = useAuth()
    

    async function processLogout(){
        
            try{
                setLoading(true)
                setError("")
                await logout()
                history.push("/")
            } catch(error) {
                setError(error.message)
                console.log(error)
            }  
            setLoading(false)
    }

    return(
        <>
        <div className="content mt-3">
        <h1 className="mt-5">Click a page to edit</h1>
        <h3>Click an area to edit the text while in admin mode</h3>
        <Button disabled={loading} className="m-2 btn-primary rounded" onClick={processLogout}>Logout</Button>
        <Button className="m-2 btn-primary rounded" onClick={() => history.push("/edit-home")}>Edit Home Page</Button>
        <Button className="m-2 btn-primary rounded" onClick={() => history.push("/edit-about-us")}>Edit About Us Page</Button>
        <Button className="m-2 btn-primary rounded" onClick={() => history.push("/edit-services")}>Edit Services Page</Button>

        </div>
        </>

    )

}