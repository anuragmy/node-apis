const axios = require('axios').default;
require("dotenv").config();



exports.yahooAnalysis = async (request, reply) => {
  const { symbol, region } = request.query;
  console.log('query', symbol)
  console.log('params', request.params);

  const options = {
    method: 'GET',
    url: process.env.YAHOO_API_ANALYSIS,
    // default query param is AMRN as it is required
    params: { symbol: symbol ? symbol : 'AMRN', region: region, },
    headers: {
      'x-rapidapi-key': process.env.RAPID_API_KEY,
      'x-rapidapi-host': process.env.RAPID_API_HOST,
      'Cache-Control': 'public, max-age=86400',
    }
  };
  await axios.request(options).then(response => {
    reply.code(200).send({ data: response.data })
  }).catch(error => {
    console.log('this is error')
    reply.code(400).send({ data: error.message, message: 'Invalid symbol or region' })
  });
};


exports.yahooNews = async (request, reply) => {
  const { uuid, region } = request.query;
  const options = {
    method: 'GET',
    url: process.env.YAHOO_API_NEWS,
    // default query param is UUI as it is required
    params: { uuid: uuid ? uuid : process.env.UUID, region },
    headers: {
      'x-rapidapi-key': process.env.RAPID_API_KEY,
      'x-rapidapi-host': process.env.RAPID_API_HOST,
      'Cache-Control': 'public, max-age=86400',
    }
  };
  await axios.request(options).then(response => {
    reply.code(200).send({ data: response.data })
  }).catch(error => {
    console.error('error');
    reply.code(400).send({ data: error.message, message: 'Invalid uuid or region' })
  });
};  