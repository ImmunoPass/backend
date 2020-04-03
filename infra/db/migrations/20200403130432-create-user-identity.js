"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("userIdentities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING(13)
      },
      passwordHash: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      salt: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      roles: {
        allowNull: false,
        type: Sequelize.STRING(30)
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
    return queryInterface.dropTable("userIdentities");
  }
};
