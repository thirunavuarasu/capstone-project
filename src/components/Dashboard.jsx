import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/create-template" className="btn btn-secondary">Create Email Template</Link>
      <Link to="/upload-recipients" className="btn btn-secondary">Upload Recipient List</Link>
      <Link to="/reports" className="btn btn-secondary">View Reports</Link>
    </div>
  );
};

export default Dashboard;
