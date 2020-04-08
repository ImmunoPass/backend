"use strict";
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const testReportData = sequelize.define(
    "testReportData",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      paitentName: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
      paitentMobileNumber: {
        allowNull: true,
        type: Sequelize.STRING(20),
      },
      testResult: {
        allowNull: true,
        type: Sequelize.TEXT("long"),
      },
      testType: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
      reportProvider: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
      reportId: {
        allowNull: true,
        type: Sequelize.STRING(20),
      },
    },
    {}
  );
  testReportData.associate = function (models) {
    // associations can be defined here
  };
  return testReportData;
};
