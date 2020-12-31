const http = require('http');
const https = require('https');

module.exports = () => {
  console.log('soc inc');
  http.globalAgent.maxSockets = Infinity;
  https.globalAgent.maxSockets = Infinity;
}

