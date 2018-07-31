const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  console.log('OKAY NOW', req.params);
  res.send('ROUTED');
});

routes.post('/', (req, res) => {
  console.log('POSTING', req.body);
  res.send('POSTED');
});

module.exports = routes;
