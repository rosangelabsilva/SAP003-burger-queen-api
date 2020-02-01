import models from '../src/models';

const getAll = async (req, res) => {
    const orders = await models.orders.findAll({raw: true});
    res.json(orders);
};

const addOrder = async (req, res) => {
    const createOrder = await models.orders.create(req.body);
    res.json(createOrder);
};

export default {
    getAll,
    addOrder
}