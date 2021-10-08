import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom"



const ArticleContext = React.createContext()

export function useArticle(){
    return useContext(ArticleContext)
}

export function ArticleProvider({ children }){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const history = useHistory()
    const [articleData, setArticleData] = useState(null)
    const [aboutUsImage, setAboutUsImage] = useState(null)
    

    async function saveArticle(title, label, body){
        let payload = {}
       
        
        payload = {
            articleTitle: title,
            label,
            body
        }
        try{
            await axios({
                url : "api/save",
                method : "POST",
                data: payload
            })
            history.go(0)
        }catch(error){
            setLoading(false)
            setError(error.message)
        }
    }
    

    async function updateArticle(title, label, article){
        
       console.log("title: " + title)
        
        let payload = {
            articleTitle: title,
            label,
            article
        }
        try{
            await axios({
                url : "api/ChangeArticle",
                method : "POST",
                data: payload
            })
            history.go(0)
        }catch(error){
            setLoading(false)
            setError(error.message)
        }
    }
    async function getArticle(articleTitle){
        let payload
        
        if (!articleTitle) payload = {}
        if (articleTitle) payload = {articleTitle: articleTitle}

        try{
           const article = await axios.get("/api/getArticle", {params: payload})
            return article
        }catch(error){
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect( () => {
        async function fetchData(){
        let articles
        let image
        try{
            articles =  await axios.get("/api/getArticle")
            setArticleData(articles.data)
        }
        catch(error){
            console.log(error)
        }
        try{
            image =  await axios.get("/api/getImage")
            setAboutUsImage(image.data)

        }
        catch(error){
            console.log(error)
        }
    }
    fetchData()
    }, [])


    const value = {
        loading,
        updateArticle,
        getArticle,
        saveArticle,
        articleData,
        aboutUsImage
    }
    return (
        <ArticleContext.Provider value={value}>
            {!loading && children}
        </ArticleContext.Provider>
    )
}