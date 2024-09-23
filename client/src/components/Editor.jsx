import React, { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = React.forwardRef((props, ref) => {
  const [editor, setEditor] = useState('');

  // Create a ref to attach to ReactQuill
  const quillRef = useRef();

  useEffect(() => {
    if (ref) {
      // Forward the ref to the quill instance if a ref is passed
      ref.current = quillRef.current;
    }
  }, [ref]);

  const handleChange = (content) => {
    setEditor(content);
  };

  return (
    <form>
      <ReactQuill
        theme="snow"
        value={editor}
        onChange={handleChange}
        ref={quillRef} // Attach ref directly to ReactQuill
      >

        </ReactQuill>
    </form>
  );
});

export default Editor;
