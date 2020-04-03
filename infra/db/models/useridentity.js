"use strict";
module.exports = (sequelize, DataTypes) => {
  const userIdentity = sequelize.define(
    "userIdentity",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(100)
        // validate: {
        //   isEmail: true
        // }
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING(13)
        // validate: {
        //   is: ["^[0-9]+$", "i"],
        //   isNumeric: true
        // }
      },
      passwordHash: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      salt: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      roles: {
        allowNull: false,
        type: Sequelize.STRING(30)
      }
    },
    {}
  );
  UserIdentity.associate = function(models) {
    // associations can be defined here
  };
  return userIdentity;
};
