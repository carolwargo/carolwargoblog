import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../Navs/TopNav';




const Layout = () => {
  return (
    <div className="layout">
      <main>
        <TopNav />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;