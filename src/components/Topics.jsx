import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Topics(){
    
    const [topicsArr, setTopicsArr] = useState([])
    
    const [loading, setLoading] = useState("loading")
        useEffect(()=>{
            axios.get(`https://northcoders-news-api-bjpy.onrender.com/api/topics`).then((response)=>{
                setTopicsArr(response.data.topics)
                setLoading("loaded")
            })
        },[])
    
    if(loading==="loaded"){
        return topicsArr.map((topic)=>{
           
            return (
        
            <Link to={`/Topics/${topic.slug}`} key={topic.slug}><h2>Topic: {topic.slug}</h2></Link>

        )
    })
}   
}

export default Topics