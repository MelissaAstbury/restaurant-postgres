const { Client } = require('pg');
const dbConfig = require('./config');

const client = new Client(dbConfig);
client.connect().then(() => {
  console.log(`Connected to ${dbConfig.database}`);
});

module.exports = client;
