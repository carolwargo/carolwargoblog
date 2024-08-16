import React, { useEffect, useState } from "react";
import Post from "../components/Posts/Post.jsx";

export default function IndexPage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {   
      fetch('http://localhost:4000/post').then(response => {
        response.json.then(posts => {
            setPosts(posts);
        console.log(posts);   



    });
    });
    },[]);

    return (
        <div>
        <h1>Index Page</h1>
     {posts.length > 0 && posts.map((post) => (
            <Post {...post} />
        ))}
        </div>
    );
    }   