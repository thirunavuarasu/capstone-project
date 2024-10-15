// components/TestEditor.jsx
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TestEditor = () => {
  return (
    <Editor
      apiKey="your-tinymce-api-key"
      initialValue="<p>This is a test editor</p>"
      init={{
        height: 500,
        menubar: false,
      }}
    />
  );
};

export default TestEditor;
