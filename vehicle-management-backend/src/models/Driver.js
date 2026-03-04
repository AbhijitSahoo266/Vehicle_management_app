const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const User = require("./User");

const Driver = sequelize.define(
  "Driver",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phoneNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
    },

    licenseNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    imageUrl: {
      type: DataTypes.STRING,
    },

    joinDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },

    currentSalary: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },

    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "drivers",
    timestamps: true,
  }
);



module.exports = Driver;
