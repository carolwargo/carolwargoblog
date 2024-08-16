import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const quillRef = useRef(null);

    // Define Quill modules and formats outside the component
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
            ['link', 'image', 'video', 'formula'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction

            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['clean']                                         // remove formatting button
        ]
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Basic validation
        if (!title || !summary || !content) {
            setError('Please fill out all fields.');
            return;
        }

        const data = new FormData();
        data.append('title', title);
        data.append('summary', summary);
        data.append('content', content);
        if (file) {
            data.append('file', file);
        }

        try {
            const response = await fetch('http://localhost:4000/posts', {
                method: 'POST',
                body: data,
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Failed to create post. Please try again.');
            }

            setSuccess('Post created successfully!');
            setTitle('');
            setSummary('');
            setContent('');
            setFile(null);
            quillRef.current.getEditor().setText(''); // Reset Quill editor content
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <div className="w3-container w3-content">
                <h1>Create Post</h1>
                <form onSubmit={handleSubmit}>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    {success && <div style={{ color: 'green' }}>{success}</div>}
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Summary"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                    />
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <ReactQuill
                        ref={quillRef}
                        value={content}
                        onChange={(content) => setContent(content)}
                        modules={modules}
                        theme="snow"
                    />
                    <button type="submit" className="w-100 mb-5 bg-primary">
                        Add Post
                    </button>
                </form>
            </div>
        </div>
    );
}
