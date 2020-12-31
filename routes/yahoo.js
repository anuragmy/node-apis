const { yahooAnalysis, yahooNews } = require("../controllers/yahoo");

module.exports.getAnalysis = (fastify, opts, done) => {
  fastify.get("/analysis", yahooAnalysis);
  done();
};

module.exports.getNews = (fastify, opts, done) => {
  fastify.get("/news", yahooNews);
  done();
};
