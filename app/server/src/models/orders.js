'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    client: DataTypes.STRING,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  orders.associate = function(models) {
    orders.hasMany(models.orderItems)
  };
  return orders;
};