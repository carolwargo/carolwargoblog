// src/components/BlogComponents/Blog/ArticleIndex.js
import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../../../data/articlesData';

const ArticleIndex = () => {
  return (
    <div>
      <h1>Blog Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={article.path}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleIndex;


/*import React, { useEffect, useState } from "react";
import Post from "../components/Post";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post')
      .then(response => response.json())
      .then(posts => setPosts(posts));
  }, []);

  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post key={post._id} {...post} /> // Adding the unique key here
      ))}
    </>
  );
}
*/