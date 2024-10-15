// components/Reports.js
import React, { useState, useEffect } from 'react';
import './Reports.css'; // Import the CSS file

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indication

  // Mock data fetching function (replace this with an API call)
  const fetchReports = () => {
    // Simulate an API call with a timeout
    setTimeout(() => {
      const mockReports = [
        { id: 1, template: 'Newsletter', delivered: 1000, opened: 800, bounced: 50 },
        { id: 2, template: 'Promotional Offer', delivered: 500, opened: 300, bounced: 20 },
        { id: 3, template: 'Event Reminder', delivered: 750, opened: 600, bounced: 15 },
      ];
      setReports(mockReports);
      setLoading(false); // Set loading to false after data is fetched
    }, 1000); // Simulated delay of 1 second
  };

  useEffect(() => {
    fetchReports(); // Fetch reports when the component mounts
  }, []);

  if (loading) {
    return <div className="loading">Loading reports...</div>; // Loading state
  }

  return (
    <div className="reports-container">
      <h2>Email Reports</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Template</th>
            <th>Delivered</th>
            <th>Opened</th>
            <th>Bounced</th>
          </tr>
        </thead>
        <tbody>
          {reports.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">No reports available.</td>
            </tr>
          ) : (
            reports.map(report => (
              <tr key={report.id}>
                <td>{report.template}</td>
                <td>{report.delivered}</td>
                <td>{report.opened}</td>
                <td>{report.bounced}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
