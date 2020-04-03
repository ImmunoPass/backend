"use strict";
const Sequelize = require("sequelize");
// const userIdentity = require("./userIdentity");
// const pathLab = require("./pathLab");
module.exports = (sequelize, DataTypes) => {
  const pathLabUser = sequelize.define(
    "pathLabUser",
    {
      userId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        validate: {
          isUUID: 4
        }
        // references: {
        //   model: userIdentity,
        //   key: "id"
        // }
      },
      userName: {
        allowNull: false,
        type: Sequelize.STRING(100)
        // validate: {
        //   is: ["^[a-z]+$", "i"],
        //   isAlpha: true
        // }
      },
      labId: {
        allowNull: false,
        type: Sequelize.UUID,
        validate: {
          isUUID: 4
        }
        // references: {
        //   model: pathLab,
        //   key: "id"
        // }
      }
    },
    {}
  );
  pathLabUser.associate = function(models) {
    // associations can be defined here
  };
  return pathLabUser;
};
