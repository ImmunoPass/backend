"use strict";
const userIdentity = require("userIdentity");
module.exports = (sequelize, DataTypes) => {
  const testTaker = sequelize.define(
    "testTaker",
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
      dob: {
        allowNull: false,
        type: Sequelize.DATE
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING(13)
        // validate: {
        //   is: ["^[0-9]+$", "i"],
        //   isNumeric: true
        // }
      },
      proofOfIdentity: {
        allowNull: false,
        type: Sequelize.STRING(1000)
        /*contains
        type:"String|50",
        idNumber:"String|20",
        fileId:"UUID4" -> points to the file object, which will have a link to the file
        */
      }
    },
    {}
  );
  testTaker.associate = function(models) {
    // associations can be defined here
  };
  return testTaker;
};
