"use strict";
const Sequelize = require("sequelize");
// const userIdentity = require("./useridentity");
// const organization = require("./organization");
// const pathLab = require("./pathLab");
module.exports = (sequelize, DataTypes) => {
  const voucher = sequelize.define(
    "voucher",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      voucherStatus: {
        allowNull: false,
        type: Sequelize.STRING(10)
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
  voucher.associate = function(models) {
    // associations can be defined here
  };
  return voucher;
};
