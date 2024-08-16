import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],       // dropdown with defaults from theme
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],     
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],    
        [{ 'indent': '-1'}, { 'indent': '+1' }],                               
        ['clean']                       
    ]
};


const formats = [
    'header', 
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 

];

export default function CreatePost() {
const [title, setTitle] = useState('');     
const [summary, setSummary] = useState('');
const [content, setContent] = useState('');
const [files, setFiles] = useState('');


async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    console.log(files);
    data.set('file', files[0]);
ev.preventDefault();

await fetch('http://localhost:4000/posts', {
        method: 'POST',
        body: data,  
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
        }

    });
console.log('Post created');
}

    return (

        <div>
            <div className='w3-container w3-content'>
                <h1>Create new post here</h1>
                <form onSubmit={createNewPost}>
                    <input 
                    type="text" 
                    placeholder={'Title'}
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}
                    />
                    <input 
                    type="text" 
                    placeholder={'Summary'}
                    value={summary}
                    onChange={(ev) => setSummary(ev.target.value)}
                    />
                      <input 
                    type="file" 
                    onChange={(ev) => setFiles(ev.target.files[0])} // Corrected file handling
                 
                    />
           
                <ReactQuill
                
                value={content} 
                modules={modules}
                formats={formats}
                onChange={newValue => setContent(newValue)}
                />
                <button 
                className='mt-2'>
                    Create Post
                    </button>
                </form>
                
                </div>
        
        
        </div>

    );
}
