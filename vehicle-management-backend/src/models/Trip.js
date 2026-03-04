const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const User = require("./User");
const Vehicle = require("./Vehicle");
const Driver = require("./Driver");

const Trip = sequelize.define(
  "Trip",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    tripDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    startLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    endLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    distanceTravelled: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },

    fareAmount: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },

    fuelCost: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },

    maintenanceCost: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },

    otherCost: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },

    passengerName: {
      type: DataTypes.STRING,
    },

    passengerPhone: {
      type: DataTypes.BIGINT,
    },

    note: {
      type: DataTypes.TEXT,
    },

    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "trips",
    timestamps: true,
  }
);



module.exports = Trip;
