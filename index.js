const fastify = require("fastify")({
  logger: {
    level: "info",
    prettyPrint: true,
  },
});
const fastifyResponseCaching = require("fastify-response-caching");
const fastifyCompress = require("fastify-compress");
const fastifyCors = require("fastify-cors");
require("dotenv").config();
const port = process.env.PORT || 3001;

// routes
const { getAnalysis, getNews } = require("./routes/yahoo");

// middlewares
fastify.register(fastifyCors);
fastify.register(fastifyResponseCaching);
fastify.register(fastifyCompress, { global: false });

// api
fastify.register(getAnalysis, { prefix: "/api" });
fastify.register(getNews, { prefix: "/api" });

// server
const start = async () => {
  try {
    await fastify.listen(port);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
