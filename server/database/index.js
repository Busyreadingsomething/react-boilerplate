const { Client } = require('pg');

const client = new Client({
  port: 5432,
  database: 'messages',
});

client.connect(err => {
  const log = err ? `FAILED: ${err}` : 'CONNECTED';
  console.log(log);
});

module.exports = client;
