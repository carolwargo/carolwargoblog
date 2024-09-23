import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";


/* Pages 
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import PostPage from "./pages/PostPage.jsx";
*/
import HomePage from "./pages/HomePage.jsx";
import BlogPage from './pages/BlogPage.jsx';
import Footer from "./components/Footer.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";


function App() {

  return (
    <div className="App">
      <BrowserRouter basename="carolwargoblog">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
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
