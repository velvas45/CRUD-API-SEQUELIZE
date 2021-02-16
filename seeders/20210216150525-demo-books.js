'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Books', [{
        judul: 'Belajar Express js',
        sinopsi: 'membuat restful api dengan express js',
        penulis: 'Helmi',
        genre: 'Education',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        judul: 'Belajar Node js',
        sinopsi: 'memahami server side dengan node',
        penulis: 'Helmi',
        genre: 'Education',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        judul: 'Belajar Javascript',
        sinopsi: 'mengenal bahasa pemrograman javascript',
        penulis: 'Helmi',
        genre: 'Education',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Books', null, {});
  }
};
