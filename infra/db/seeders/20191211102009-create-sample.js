'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: "piyush",
    email: "piyush",
    dp: "piyush",
    username: "piyush",
    mobileno: "piyush",
    password: "piyush",
    status: "piyush",
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          name: "123",
    email: "piyush",
    dp: "piyush",
    username: "piyush",
    mobileno: "piyush",
    password: "piyush",
    status: "piyush",
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
  