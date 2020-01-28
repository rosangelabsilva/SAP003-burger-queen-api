'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'Água 500ml',
        price: 5,
        breakfast: false 
      },
      {
        name: 'Água 750ml',
        price: 7,
        breakfast: false
      },
      {
        name: 'Refrigerante 500ml',
        price: 7,
        breakfast: false
      },
      {
        name: 'Refrigerante 750ml',
        price: 10,
        breakfast: false
      },
      {
        name: 'Batata frita',
        price: 5,
        breakfast: false
      },
      {
        name: 'Anéis de cebola',
        price: 5,
        breakfast: false
      },
      {
        name: 'Hambúrguer simples',
        price: 10,
        breakfast: false
      },
      {
        name: 'Hambúrguer duplo',
        price: 15,
        breakfast: false
      },
      {
        name: 'Café americano',
        price: 5,
        breakfast: true
      },
      {
        name: 'Café com leite',
        price: 7,
        breakfast: true
      },
      {
        name: 'Suco de fruta natural',
        price: 7,
        breakfast: true
      },
      {
        name: 'Misto quente',
        price: 10,
        breakfast: true
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
