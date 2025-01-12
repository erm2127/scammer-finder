import React from 'react';

const Notification = ({ message, type = 'success' }) => {
  return (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  );
};

export default Notification;