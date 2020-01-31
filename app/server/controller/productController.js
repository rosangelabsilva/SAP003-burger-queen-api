import models from '../src/models';

const getAll = async (req, res) => {
    const products = await models.Products.findAll({raw: true});
    res.json(products);
};

export default {
    getAll
}