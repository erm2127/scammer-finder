const emailService = require('./emailService');

const sendAdminNotification = async (report) => {
  const adminEmail = 'admin@example.com'; // Replace with actual admin email
  const subject = 'New Scam Report Submitted';
  const message = `A new scam report has been submitted: ${report.description}`;

  await emailService.sendEmail(adminEmail, subject, message);
};

module.exports = {
  sendAdminNotification,
};