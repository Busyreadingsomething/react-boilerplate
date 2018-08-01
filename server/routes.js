const express = require('express');
const db = require('./database/query');

const routes = express.Router();

routes.get('/', (req, res) => {
  db.getList()
    .then(data => res.send(data.rows))
    .catch(() => res.sendStatus(500));
});

routes.post('/', (req, res) => {
  db.postMessage(req.body)
    .then(() => res.send('POSTED'))
    .catch(() => res.sendStatus(500));
});

module.exports = routes;
