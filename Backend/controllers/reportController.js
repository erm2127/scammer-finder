const { Report } = require('../models/Report');
const notificationService = require('../services/notificationService');

const submitReport = async (req, res) => {
  try {
    const { reportType, description, links, userId } = req.body;
    const newReport = await Report.query().insert({ reportType, description, links, userId });

    // Send notification to admin
    notificationService.sendAdminNotification(newReport);

    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit report' });
  }
};

module.exports = {
  submitReport,
};