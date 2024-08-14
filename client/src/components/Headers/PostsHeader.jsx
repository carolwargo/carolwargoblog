import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/test.css';

const PostsHeader = () => {
    return (
        <div className='w3-container w3-content'>
        <header className="posts-header">
        <Link to="/" className="logo">
          MyBlog
        </Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
      </div>
    );
}   

export default PostsHeader;