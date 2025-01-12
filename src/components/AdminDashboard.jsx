import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [pendingReports, setPendingReports] = useState([]);

  useEffect(() => {
    const fetchPendingReports = async () => {
      try {
        const response = await axios.get('/api/admin/reports');
        setPendingReports(response.data);
      } catch (error) {
        console.error('Error fetching pending reports:', error);
      }
    };

    fetchPendingReports();
  }, []);

  const handleApproveReport = async (reportId) => {
    try {
      await axios.put(`/api/admin/reports/${reportId}/approve`);
      // Update the UI to reflect the change
      setPendingReports(pendingReports.filter((report) => report.id !== reportId));
    } catch (error) {
      console.error('Error approving report:', error);
    }
  };

  const handleRejectReport = async (reportId) => {
    try {
      await axios.put(`/api/admin/reports/${reportId}/reject`);
      // Update the UI to reflect the change
      setPendingReports(pendingReports.filter((report) => report.id !== reportId));
    } catch (error) {
      console.error('Error rejecting report:', error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2>Pending Reports</h2>
      <table className="w-full border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 p-2">ID</th>
            <th className="border border-gray-200 p-2">Type</th>
            <th className="border border-gray-200 p-2">Description</th>
            <th className="border border-gray-200 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pendingReports.map((report) => (
            <tr key={report.id}>
              <td className="border border-gray-200 p-2">{report.id}</td>
              <td className="border border-gray-200 p-2">{report.reportType}</td>
              <td className="border border-gray-200 p-2">{report.description}</td>
              <td className="border border-gray-200 p-2">
                <button
                  onClick={() => handleApproveReport(report.id)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleRejectReport(report.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;