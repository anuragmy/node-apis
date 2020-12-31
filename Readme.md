# node-apis

API to get data from Yahoo Finance API

# To run ths project locally,

1. Clone repo

2. <code>npm install</code>

3. <code>npm start</code>

# Note

1. Analysis Api

a) route: /api/analysis

b) query params: region (optional) , symbol (optional by default, if providing, provide correct symbol)

2. News Api

a. route: /api/news

b. query params: region (optional) , uuid (optional by default, if providing, provide correct uuid)

# Methods used in this repo to make API faster

1. Used fastify in place of express

Article: https://medium.com/javascript-in-plain-english/fastify-express-benchmark-4c4aebb726d6

2. Compression

3. Cache Control in request header

4. response-caching middleware

5. running express in production mode

6. Increase Max Sockets (in config.js)
