'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    breakfast: DataTypes.BOOLEAN
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};  