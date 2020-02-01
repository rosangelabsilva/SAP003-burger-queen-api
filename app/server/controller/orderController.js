import models from '../src/models';

const getAll = async (req, res) => {
    const orders = await models.orders.findAll({raw: true});
    res.json(orders);
};

const addOrder = async (req, res) => {
    const createOrder = await models.orders.create(req.body);
    res.json(createOrder);
};

const getIdOrder = async (req, res) => {
    const {id} = req.params;
    const products = await models.orders.findOne({where:{id:Number(id)}});
    res.json(products);
};

const updatedOrder = async (req, res) => {
    const { id } = req.params;
    const products = await models.orders.update(req.body, {where:{id:Number(id)}});
    res.json(products)
}

const deleteOrder = async (req, res) => {
    const { id } = req.params;
    const products = await models.orders.destroy({where:{id:Number(id)}});
    res.json(products)
}

export default {
    getAll,
    addOrder,
    getIdOrder,
    updatedOrder,
    deleteOrder
}