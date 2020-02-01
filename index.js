import productRoutes from './app/server/routes/productRoutes';
import orderRoutes from './app/server/routes/orderRoutes';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);