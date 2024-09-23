// src/components/BlogComponents/Blog/ArticleIndex.js
import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../../../data/articles-data';

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
