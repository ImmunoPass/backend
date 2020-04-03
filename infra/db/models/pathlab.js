"use strict";
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const pathLab = sequelize.define(
    "pathLab",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
        // validate: {
        //   is: ["^[a-z]+$", "i"],
        //   isAlpha: true
        // }
      },
      addressId: {
        allowNull: false,
        type: Sequelize.UUID,
        validate: {
          isUUID: 4
        }
      }
    },
    {}
  );
  pathLab.associate = function(models) {
    // associations can be defined here
  };
  return pathLab;
};
