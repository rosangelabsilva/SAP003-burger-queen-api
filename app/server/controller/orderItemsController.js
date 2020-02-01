import models from '../src/models';

const addOrderItems = async (req, res) => {
  const createOrderItems = await models.ordersItems.create(req.body);
  res.json(createOrderItems);
};
  
export default {
  addOrderItems
}