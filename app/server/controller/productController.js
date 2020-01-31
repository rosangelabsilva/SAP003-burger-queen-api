import models from '../src/models';

const getAll = async (req, res) => {
    const products = await models.Products.findAll({raw: true});
    res.json(products);
};

const getId = async (req, res) => {
    const {id} = req.params;
    const products = await models.Products.findOne({where:{id:Number(id)}});
    res.json(products);
}

const addProduct = async (req, res) => {
    const createProduct = await models.Products.create(req.body);
    res.json(createProduct);
}

const updatedProduct = async (req, res) => {
    const { id } = req.params;
    const products = await models.Products.update(req.body, {where:{id:Number(id)}});
    res.json(products)
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const products = await models.Products.destroy({where:{id:Number(id)}});
    res.json(products)
}

export default {
    getAll,
    getId,
    addProduct,
    updatedProduct,
    deleteProduct
}