import React from 'react';
import ReportForm from '../components/ReportForm';

const Report = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Report a Scam</h1>
      <ReportForm />
    </div>
  );
};

export default Report;