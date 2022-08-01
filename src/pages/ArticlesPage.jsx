import React, { useEffect, useState } from 'react'
import PostService from "../API/PostService"

const ArticlesPage = () => {
    const [posts,setPosts]=useState([])

    const getPosts = async () => {
        setPosts(await PostService.getAll())
    }

    useEffect(()=>{
        getPosts()
    },[])


    return (
        <div>
            {posts ? posts.map(post=>post.title) : "Load"}
        </div>
    )
}

export default ArticlesPage