import React, { useState } from 'react';
import axios from 'axios';
import { useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations'; // Import animation

const ReportForm = () => {
  const [formData, setFormData] = useState({ reportType: '', description: '', links: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const response = await axios.post('/api/reports', formData);
      setLoading(false);
      // Handle success (e.g., show success message)
      alert('Report submitted successfully!');
    } catch (error) {
      setLoading(false);
      setError('Failed to submit report. Please try again.');
      console.error(error);
    }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="p-6 bg-white rounded-lg shadow-md">
      {error && <div className="alert alert-danger"> {error} </div>}
      {loading && <LoadingSpinner />} 
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="reportType" className="block text-sm font-medium text-gray-700">
            Report Type:
          </label>
          <select
            id="reportType"
            name="reportType"
            value={formData.reportType}
            onChange={(e) => setFormData({ ...formData, reportType: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Report Type</option>
            <option value="phishing">Phishing</option>
            <option value="spam">Spam</option>
            <option value="fraud">Fraud</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="links" className="block text-sm font-medium text-gray-700">
            Links:
          </label>
          <input
            type="text"
            id="links"
            name="links"
            value={formData.links}
            onChange={(e) => setFormData({ ...formData, links: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Report
        </button>
      </form>
    </motion.div>
  );
};

export default ReportForm;