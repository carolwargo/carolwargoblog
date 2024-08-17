import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  // Start Define Quill modules and formats
  const modules = {
    toolbar: [
      [{ header: 1 }, { header: 2 }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "check",
    "link",
    "image",
    "clean",
  ];
  // End Define Quill modules and formats

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const navigate = useNavigate();
  const quillRef = useRef(null);

  async function createNewPost(ev) {
    ev.preventDefault();
    
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files);

    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });

    if (response.ok) {
      navigate('/'); // Redirect to home page
    } else {
      console.error('Failed to create post');
      // Handle errors (e.g., show an error message to the user)
    }
  }

  return (
    <div className="create-post-container">
      <div className="w3-container w3-content">
        <h1>Create Post</h1>
        <form onSubmit={createNewPost}>
          <input
            type="text" // Corrected to "text"
            placeholder={"Title"}
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
            className="mb-1"
          />
          <input
            type="text" // Corrected to "text"
            placeholder={"Summary"}
            value={summary}
            onChange={(ev) => setSummary(ev.target.value)}
            className="mb-1"
          />
          <input 
            type="file"
            onChange={(ev) => setFiles(ev.target.files[0])} 
            className="mb-1"
          />
          <ReactQuill
            ref={quillRef}
            value={content}
            onChange={(newValue) => setContent(newValue)}
            modules={modules}
            formats={formats}
            theme="snow"
            className="mb-1"
          />
          <button 
            type="submit" 
            className="w-100 mb-5 bg-primary"
          >
            Create post
          </button>
        </form>
      </div>
    </div>
  );
}
