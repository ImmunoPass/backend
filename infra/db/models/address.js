"use strict";
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define(
    "address",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
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
      }
    },
    {}
  );
  address.associate = function(models) {
    // associations can be defined here
  };
  return address;
};
