const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const User = require("./User");

const Vehicle = sequelize.define(
  "Vehicle",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    registrationNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    photoUrl: {
      type: DataTypes.STRING,
    },

    emiAmount: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },

    emiDueDate: {
      type: DataTypes.DATE,
    },

    purchaseDate: {
      type: DataTypes.DATE,
    },

    vehicleTax: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },

    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "vehicles",
    timestamps: true,
  }
);



module.exports = Vehicle;
