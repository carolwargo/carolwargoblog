import React from 'react';
import { Outlet } from 'react-router-dom';
import PostsHeader from '../Headers/PostsHeader';




const PostsLayout = () => {
  return (
    <div className="posts-layout">
      <main>
        <PostsHeader  />
        <Outlet />
      </main>
    </div>
  );
};

export default PostsLayout;