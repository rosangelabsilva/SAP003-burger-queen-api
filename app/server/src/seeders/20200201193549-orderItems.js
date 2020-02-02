'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orderItems', [
      {
        productId: 2,
        orderId: 1,
        qtd: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orderItems', null, {});
  }
};
