import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* Pages */
import HomePage from "./pages/HomePage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import Article1 from "./components/Blog/Articles/Article1.jsx";
import Article2 from "./components/Blog/Articles/Article2.jsx";
import Article3 from "./components/Blog/Articles/Article3.jsx";
import Article4 from "./components/Blog/Articles/Article4.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import BlogHeaderNav from "./components/Headers/BlogHeaderNav.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import BlogFooter from "./components/BlogFooter.jsx";
import "./App.css";
/* Test Pages */
import Test from "./pages/Test.jsx";
import Test2 from "./pages/Test2.jsx";

function App() {
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <BlogHeaderNav />
          <Routes>
            <Route path="/" element={<HomePage setCurrentArticleIndex={setCurrentArticleIndex} />} />
           <Route path="/dashboard" element={<Dashboard />} />
            <Route 
              path="/blog" 
              element={<BlogPage currentArticleIndex={currentArticleIndex} setCurrentArticleIndex={setCurrentArticleIndex} />} 
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
