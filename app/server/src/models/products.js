'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    breakfast: DataTypes.BOOLEAN,
  }, {});
  Products.associate = function(models) {
    Products.hasMany(models.orderItems)
  };
  return Products;
};