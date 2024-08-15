import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* Pages */
import HomePage from "./pages/HomePage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import Article1 from "./components/Blog/Articles/Article1.jsx";
import Article2 from "./components/Blog/Articles/Article2.jsx";
import Article3 from "./components/Blog/Articles/Article3.jsx";
import Article4 from "./components/Blog/Articles/Article4.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import CreatePost from "./pages/CreatePost.jsx";
//import BlogHeaderNav from "./components/Headers/BlogHeaderNav.jsx";
//import DashboardPage from './pages/DashboardPage.jsx'
import BlogFooter from "./components/BlogFooter.jsx";
import PostsLayout from "./components/Layouts/PostsLayout.jsx";
import Layout from "./components/Layouts/Layout.jsx";
import "./App.css";
/* Test Pages */
import Test from "./pages/Test.jsx";
import Test2 from "./pages/Test2.jsx";
import { UserContextProvider } from "./UserContext.jsx";

function App() {
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  return (
    <div className="App">
    
      <BrowserRouter>
      <UserContextProvider>
        <ErrorBoundary>
          <Routes>
            <Route element={<PostsLayout />}>
              <Route path="/test" element={<Test />} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
           <Route path="/create" element={<CreatePost />} />
            </Route>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
            </Route>
            <Route
              path="/blog"
              element={
                <BlogPage
                  currentArticleIndex={currentArticleIndex}
                  setCurrentArticleIndex={setCurrentArticleIndex}
                />
              }
            />
            <Route path="/article1" element={<Article1 />} />
            <Route path="/article2" element={<Article2 />} />
            <Route path="/article3" element={<Article3 />} />
            <Route path="/article4" element={<Article4 />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/test" element={<Test />} />
            <Route path="/test2" element={<Test2 />} />
          </Routes>
          <BlogFooter />
        </ErrorBoundary>
        </UserContextProvider>
      </BrowserRouter>
   
    </div>
  );
}

// Create a component for handling not found routes
function NotFound() {
  console.error("Page not found!"); // Log error to console
  return <h1>404 - Not Found</h1>;
}

export default App;
