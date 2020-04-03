"use strict";
const userIdentity = require("userIdentity");
module.exports = (sequelize, DataTypes) => {
  const gomAdminUsers = sequelize.define(
    "gomAdminUsers",
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
      gomName: {
        allowNull: false,
        type: Sequelize.STRING(100)
      }
    },
    {}
  );
  gomAdminUsers.associate = function(models) {
    // associations can be defined here
  };
  return gomAdminUsers;
};
