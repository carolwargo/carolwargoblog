import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* Pages */
//import BlogPage from "./pages/BlogPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import PostPage from "./pages/PostPage.jsx";
//import BlogHeaderNav from "./components/Headers/BlogHeaderNav.jsx";
//import DashboardPage from './pages/DashboardPage.jsx'
import Footer from "./components/Footer.jsx";
import PostsLayout from "./components/Layouts/PostsLayout.jsx";
//import Layout from "./components/Layouts/Layout.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import EditPost from "./pages/EditPost.jsx";
import "./App.css";
/* Test Pages */
//import Test from "./pages/Test.jsx";
//import Test2 from "./pages/Test2.jsx";
import { UserContextProvider } from "./UserContext.jsx";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
        <UserContextProvider>
          <Routes>
              <Route element={<PostsLayout />}>
                <Route path="/" element={<IndexPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/edit/:id" element={<EditPost />} />
                <Route path="/post/:id" element={<PostPage />} />
              </Route>
            {/**<Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
            </Route>
            */}
     
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
