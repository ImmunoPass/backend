"use strict";
const userIdentity = require("userIdentity");
const test = require("test");
const pathLab = require("pathLab");
module.exports = (sequelize, DataTypes) => {
  const immunePass = sequelize.define(
    "immunePass",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      userId: {
        allowNull: false,
        type: Sequelize.UUID,
        validate: {
          isUUID: 4
        }
        // references: {
        //   model: userIdentity,
        //   key: "id"
        // }
      },
      testId: {
        allowNull: false,
        type: Sequelize.UUID,
        validate: {
          isUUID: 4
        }
        // references: {
        //   model: test,
        //   key: "id"
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
      },
      result: {
        allowNull: false,
        type: Sequelize.STRING(20)
        // validate: {
        //   is: ["^[a-z]+$", "i"],
        //   isAlpha: true
        // }
      }
    },
    {}
  );
  immunePass.associate = function(models) {
    // associations can be defined here
  };
  return immunePass;
};
