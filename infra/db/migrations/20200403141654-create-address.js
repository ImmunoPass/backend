"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("addresses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      addressLine1: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      addressLine2: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      landmark: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      pinCode: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("addresses");
  }
};
