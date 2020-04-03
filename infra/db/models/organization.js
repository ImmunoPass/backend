"use strict";
module.exports = (sequelize, DataTypes) => {
  const organization = sequelize.define(
    "organization",
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
  organization.associate = function(models) {
    // associations can be defined here
  };
  return organization;
};
