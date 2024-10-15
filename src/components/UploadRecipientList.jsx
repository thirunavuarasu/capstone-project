import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const UploadRecipientList = () => {
  const handleSubmit = (values) => {
    console.log(values); // Handle file upload logic here
  };

  return (
    <Formik initialValues={{ file: null }} onSubmit={handleSubmit}>
      {({ setFieldValue }) => (
        <Form>
          <h2>Upload Recipient List</h2>
          <div className="form-group">
            <input type="file" name="file" accept=".csv" onChange={(event) => {
              setFieldValue("file", event.currentTarget.files[0]);
            }} />
            <ErrorMessage name="file" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Upload</button>
        </Form>
      )}
    </Formik>
  );
};

export default UploadRecipientList;
