import axios from "axios"
import { useState } from "react"

function SortArticles({setButtonOrder, setSortBy}){
return (
<div>
<label htmlFor="articles-sorter">Sort articles: </label>
        <select id="articles-sorter"
        onChange={(e)=>{
            setSortBy(
                e.target.value === "Date Posted"
                ? "created_at"
                : e.target.value === "Comment Count"
                ? "comment_count"
                : "votes"
            )
        }}>
            <option>Date Posted</option>
            <option>Comment Count</option>
            <option>Likes</option>
        </select>
        <button onClick={()=>{setButtonOrder("desc")}}>Highest</button>
        <button onClick={()=>{setButtonOrder("asc")}}>Lowest</button>
</div>
)
}

export default SortArticles