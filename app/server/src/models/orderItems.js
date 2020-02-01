'use strict';
module.exports = (sequelize, DataTypes) => {
  const orderItems = sequelize.define('orderItems', {
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER
  }, {});
  orderItems.associate = function(models) {
    orderItems.belongsTo(models.Products)
    orderItems.belongsTo(models.orders)
  };
  return orderItems;
};