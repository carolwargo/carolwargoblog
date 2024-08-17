import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";


/* Pages */
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import PostPage from "./pages/PostPage.jsx";
import Footer from "./components/Footer.jsx";
import Layout from './components/Layout.jsx';
import IndexPage from "./pages/IndexPage.jsx";
import EditPost from "./pages/EditPost.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";


/* Test Pages */
import { UserContextProvider } from "./components/UserContext.jsx";

function App() {

  return (
    <div className="App" >
      <BrowserRouter basename="carolwargoblog">
        <ErrorBoundary>
        <UserContextProvider>
          <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<IndexPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/edit/:id" element={<EditPost />} />
                <Route path="/post/:id" element={<PostPage />} />
              </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          </UserContextProvider>
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
