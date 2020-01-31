import productRoutes from './app/server/routes/productRoutes';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// import { DatabaseError } from 'sequelize/types';

// app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/products', productRoutes);

// const { Client } = require('pg');

// app.get('/products', async(req, res) => {
//     const client = new Client(databaseConfig)
//     await client.connect()
//     const result = await client.query({
//       text: 'select * from products;'
//     })
//     await client.end();
//     return res.send(result.rows)
// });