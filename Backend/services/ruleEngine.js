const calculateRiskScore = (accountAge, keywords, links) => {
    let score = 0;
  
    if (accountAge < 7) score += 20; // Newly created account
    if (keywords.some(keyword => ['giveaway', 'free', 'win'].includes(keyword))) score += 30; // Suspicious keywords
    if (links.some(link => link.includes('bit.ly') || link.includes('phishing'))) score += 40; // Suspicious links
  
    return score;
  };
  
  module.exports = {
    calculateRiskScore,
  };