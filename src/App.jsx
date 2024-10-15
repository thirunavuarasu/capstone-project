// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import EmailTemplateBuilder from './components/EmailTemplateBuilder';
import UploadRecipientList from './components/UploadRecipientList';
import Reports from './components/Reports';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* Add the Navbar here */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-template" element={<EmailTemplateBuilder />} />
          <Route path="/upload-recipients" element={<UploadRecipientList />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
