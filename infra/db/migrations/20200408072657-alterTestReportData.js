"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("testReportData", "testResult", {
      type: Sequelize.TEXT("long"),
      allowNull: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("testReportData", "testResult", {
      type: Sequelize.STRING(30),
      allowNull: true,
    });
  },
};
