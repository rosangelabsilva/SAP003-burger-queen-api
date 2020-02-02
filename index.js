import productRoutes from './app/server/routes/productRoutes';
import orderRoutes from './app/server/routes/orderRoutes';
import orderItemsRoutes from './app/server/routes/orderItemsRoutes';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, host);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/orderitems', orderItemsRoutes);