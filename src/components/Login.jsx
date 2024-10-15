import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = async (values) => {
    // Your login logic
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" id="email" className="form-control" />
          <ErrorMessage name="email" component="div" className="text-danger" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" id="password" className="form-control" />
          <ErrorMessage name="password" component="div" className="text-danger" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </Form>
    </Formik>
  );
};

export default Login;
