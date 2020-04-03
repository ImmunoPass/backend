"use strict";
const Sequelize = require("sequelize");
// const userIdentity = require("./userIdentity");
// const organization = require("./organization");
module.exports = (sequelize, DataTypes) => {
  const orgAdminUser = sequelize.define(
    "orgAdminUser",
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
      },
      orgId: {
        allowNull: false,
        type: Sequelize.UUID,
        validate: {
          isUUID: 4
        }
        // references: {
        //   model: organization,
        //   key: "id"
        // }
      },
      availableVouchers: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    },
    {}
  );
  orgAdminUser.associate = function(models) {
    // associations can be defined here
  };
  return orgAdminUser;
};
