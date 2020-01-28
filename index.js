const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);

const apiConfig = {
  port: 3000
}

const databaseConfig = {
  user: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  database: 'burguerqueen',
  port: 5432,
  ssl: false
}

const { Client } = require('pg');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/products', async (req, res) => {
  const client = new Client(databaseConfig)
  await client.connect()
  const result = await client.query({
    text: 'select * from products;'
  })
  await client.end()
  res.send(result.rows)
});
