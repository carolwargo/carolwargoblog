import React, { useEffect, useState } from "react";
import Post from "../components/Posts/Post.jsx";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {   
    fetch('http://localhost:4000/post')
        .then(response => response.json()) // Correctly call the .json() function
        .then(posts => {
            setPosts(posts);
            console.log(posts);   
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
}, []);


  return (
    <div className="all-posts w3-container w3-content">
      <h1>Index Page</h1>
      {posts.length > 0 && posts.map((post) => (
                <Post key={post._id} {...post} /> 
            ))}
    </div>
  );
}
