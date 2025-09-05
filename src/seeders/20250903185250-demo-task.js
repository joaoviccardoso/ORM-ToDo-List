'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', [
      {
        titulo: 'Node.js',
        ativa: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Java',
        ativa: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Python',
        ativa: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'C#',
        ativa: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
