// components/EmailTemplateBuilder.js
import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const EmailTemplateBuilder = () => {
  const [content, setContent] = useState('');

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission of the email template
    console.log('Submitted content:', content);
  };

  return (
    <div>
      <h2>Email Template Builder</h2>
      <form onSubmit={handleSubmit}>
        <Editor
          apiKey="your-tinymce-api-key" // Replace with your TinyMCE API key
          initialValue="<p>This is the initial content of the editor</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code',
          }}
          value={content}
          onEditorChange={handleEditorChange}
        />
        <button type="submit" className="btn btn-primary mt-3">Save Template</button>
      </form>
    </div>
  );
};

export default EmailTemplateBuilder;
