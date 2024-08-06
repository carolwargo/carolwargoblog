import React from 'react';
import { Outlet } from 'react-router-dom';
import BlogHeaderNav from '../Headers/BlogHeaderNav';
import BlogFooter from '../Footer/BlogFooter';  



const BlogLayout = () => {
  return (
    <div className="blog-layout">
      <main>
        <BlogHeaderNav />
        <Outlet />
        <BlogFooter />
      </main>
    </div>
  );
};

export default BlogLayout;