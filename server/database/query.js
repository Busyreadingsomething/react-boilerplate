const client = require('./index');

const getList = () => client.query('SELECT * FROM list');

const postMessage = ({ message }) =>
  client.query(`INSERT INTO list (note) VALUES ('${message}')`);

module.exports.getList = getList;
module.exports.postMessage = postMessage;
