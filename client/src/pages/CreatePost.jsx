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
const [file, setFile] = useState('');
const [content, setContent] = useState('');

function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    console.log(file);
    data.set('file', file);

    fetch('http://localhost:4000/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            summary,
            content,
            file
        }),
            headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => {
        setTitle('');
        setSummary('');
        setContent('');
        setFile('');
    });
    ev.preventDefault();    
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
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <input 
                    type="text" 
                    placeholder={'Summary'}
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    />
                      <input 
                    type="file" 
                    value={file}
                    onChange={(ev) => setFile(ev.target.file)}
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
