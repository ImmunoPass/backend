"use strict";
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const test = sequelize.define(
    "test",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      testName: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {}
      },
      testKitName: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {}
      },
      testkitBatchId: {
        allowNull: false,
        type: Sequelize.STRING(50),
        validate: {}
      }
    },
    {}
  );
  test.associate = function(models) {
    // associations can be defined here
  };
  return test;
};
