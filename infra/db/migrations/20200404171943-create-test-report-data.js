"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("testReportData", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      paitentName: {
        type: Sequelize.STRING(100)
      },
      paitentMobileNumber: {
        type: Sequelize.STRING(20)
      },
      testResult: {
        type: Sequelize.STRING(30)
      },
      testType: {
        type: Sequelize.STRING(100)
      },
      reportProvider: {
        type: Sequelize.STRING(100)
      },
      reportId: {
        type: Sequelize.STRING(20)
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
    return queryInterface.dropTable("testReportData");
  }
};
