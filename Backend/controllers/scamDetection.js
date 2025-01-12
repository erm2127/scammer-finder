const { Report } = require('../models/Report');
const { Profile } = require('../models/Profile');
const ruleEngine = require('../services/ruleEngine');

const calculateRisk = async (req, res) => {
  try {
    const { accountAge, keywords, links } = req.body;
    const riskScore = ruleEngine.calculateRisk(accountAge, keywords, links);

    res.json({ riskScore });
  } catch (error) {
    res.status(500).json({ error: 'Error calculating risk' });
  }
};

module.exports = {
  calculateRisk,
};