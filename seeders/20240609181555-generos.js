'use strict';

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('generos', [
      {
        nome_genero: 'Ação'
      },
      {
        nome_genero: 'Comédia'
      },
      {
        nome_genero: 'Terror'
      },
      {
        nome_genero: 'Ficção'
      },
      {
        nome_genero: 'Fantasia'
      },
      {
        nome_genero: 'Documentario'
      },
      {
        nome_genero: 'Faroeste'
      },
      {
        nome_genero: 'Romance'
      },
      {
        nome_genero: 'Documentário'
      },
    ], {});
  },
  
  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('generos', null, {});
    
  }
};
