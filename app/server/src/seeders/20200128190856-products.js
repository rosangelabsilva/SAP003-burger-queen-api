'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Água 500ml',
        price: 5,
        breakfast: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Água 750ml',
        price: 7,
        breakfast: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerante 500ml',
        price: 7,
        breakfast: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerante 750ml',
        price: 10,
        breakfast: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Batata frita',
        price: 5,
        breakfast: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Anéis de cebola',
        price: 5,
        breakfast: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hambúrguer simples',
        price: 10,
        breakfast: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hambúrguer duplo',
        price: 15,
        breakfast: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Café americano',
        price: 5,
        breakfast: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Café com leite',
        price: 7,
        breakfast: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Suco de fruta natural',
        price: 7,
        breakfast: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Misto quente',
        price: 10,
        breakfast: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
