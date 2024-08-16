import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';

export default function CreatePost() {
   

//Start Define Quill modules and formats
    const modules = {
        toolbar: [   
            [{ 'header': 1 }, { 'header': 2 }],     
            ['bold', 'italic', 'underline', 'strike'],    
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
            ['link', 'image'],
            ['clean']                                  
        ]
    };
    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'check', 'link', 'image', 'clean'
    ];
 //End Define Quill modules and formats

 const [title, setTitle] = useState('');
 const [summary, setSummary] = useState('');
 const [content, setContent] = useState('');
 const [files, setFiles] = useState('');
 /*const [error, setError] = useState('');
const [success, setSuccess] = useState('');*/
 const quillRef = useRef(null);

   function createNewPost(ev) {
    const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        ev.preventDefault();
        console.log(files)
fetch('http://localhost:4000/post', {
    method: 'POST',
    body: data,
   })
}

    return (
        <div>
            <div className="w3-container w3-content">
                <h1>Create Post</h1>
                <form onSubmit={createNewPost}>
                    {/*
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    {success && <div style={{ color: 'green' }}>{success}</div>}
                   */}
                    <input
                        type="title"
                        placeholder={'Title'}
                        value={title}
                        onChange={(ev) => setTitle(ev.target.value)}
                    />
                    <input
                        type="summary"
                        placeholder={'Summary'}
                        value={summary}
                        onChange={(ev) => setSummary(ev.target.value)}
                    />
                    <input
                        type="file"
                        onChange={(ev) => setFiles(ev.target.files[0])}
                    />
                    <ReactQuill
                        ref={quillRef}
                        value={content}
                        onChange={newValue => setContent(newValue)}
                        modules={modules}
                        formats={formats}
                        theme="snow"
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


