"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("testTakers", {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID
      },
      userName: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      dob: {
        allowNull: false,
        type: Sequelize.DATE
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING(13)
      },
      proofOfIdentity: {
        allowNull: false,
        type: Sequelize.STRING(1000)
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
    return queryInterface.dropTable("testTakers");
  }
};
