import productRoutes from './app/server/routes/productRoutes';
import orderRoutes from './app/server/routes/orderRoutes';
import orderItemsRoutes from './app/server/routes/orderItemsRoutes';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const minha_porta = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(minha_porta);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/orderitems', orderItemsRoutes);