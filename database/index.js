const { Client } = require('pg');

const client = new Client({
  user: 'jordanbeaird',
  host: 'localhost',
  database: 'citizens',
  port: 5432,
  password: 'password'
})

client.connect();

client.query('SELECT 1+1 AS solution', (err, results) => {
  if (err) throw err;
  console.log('CONNECTED! The solution is: ', results.rows[0].solution);
});

module.exports = client;