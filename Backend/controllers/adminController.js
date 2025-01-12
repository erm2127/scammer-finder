const { Report } = require('../models/Report');

const getPendingReports = async (req, res) => {
  try {
    const pendingReports = await Report.query().where({ status: 'pending' });
    res.json(pendingReports);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pending reports' });
  }
};

const approveReport = async (req, res) => {
  try {
    const { reportId } = req.params;
    const updatedReport = await Report.query().findById(reportId).patch({ status: 'approved' });
    res.json(updatedReport);
  } catch (error) {
    res.status(500).json({ error: 'Failed to approve report' });
  }
};

const rejectReport = async (req, res) => {
  try {
    const { reportId } = req.params;
    const updatedReport = await Report.query().findById(reportId).patch({ status: 'rejected' });
    res.json(updatedReport);
  } catch (error) {
    res.status(500).json({ error: 'Failed to reject report' });
  }
};

module.exports = {
  getPendingReports,
  approveReport,
  rejectReport,
};