import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

/* Pages 
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import PostPage from "./pages/PostPage.jsx";
*/

import Article1 from "./components/BlogComponents/Articles/Article1.jsx";
import Article2 from "./components/BlogComponents/Articles/Article2.jsx";
import Article3 from "./components/BlogComponents/Articles/Article3.jsx";
import Article4 from "./components/BlogComponents/Articles/Article4.jsx";
import Article5 from "./components/BlogComponents/Articles/Article5.jsx";
import Slide1 from "./components/BlogComponents/Slides/Slide1.jsx";
import HomePage from "./pages/HomePage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import DemoPage from "./pages/DemoPage.jsx";
import TopNav from "./components/Navs/TopNav.jsx";
import Footer from "./components/Footer.jsx";
import BlogHeader from "./components/BlogComponents/Headers/BlogHeader.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

function App() {
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  return (
    <div className="App">
      <BrowserRouter basename="carolwargoblog">
        <ErrorBoundary>
          <TopNav />
          <BlogHeader />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/demo" element={<DemoPage />} />

          <Route path="*" element={<HomePage setCurrentArticleIndex={setCurrentArticleIndex} />} />
        
        <Route 
          path="/blog" 
          element={<BlogPage currentArticleIndex={currentArticleIndex} setCurrentArticleIndex={setCurrentArticleIndex} />} 
        />
        <Route path="/article1" element={<Article1 />} />
        <Route path="/article2" element={<Article2 />} />
        <Route path="/article3" element={<Article3 />} />
        <Route path="/article4" element={<Article4 />} />
        <Route path="/article5" element={<Article5 />} />
        <Route path="/slide1" element={<Slide1 />} />
             
         
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </ErrorBoundary>
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
