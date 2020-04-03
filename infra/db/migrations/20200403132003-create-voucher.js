"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("vouchers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID
      },
      voucherStatus: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      userId: {
        allowNull: false,
        type: Sequelize.UUID
      },
      orgId: {
        allowNull: false,
        type: Sequelize.UUID
      },
      labId: {
        allowNull: false,
        type: Sequelize.UUID
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
    return queryInterface.dropTable("vouchers");
  }
};
