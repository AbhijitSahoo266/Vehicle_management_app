const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phoneno: {
      type: DataTypes.BIGINT,
      allowNull:false,
      unique:true
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
        type : DataTypes.BOOLEAN,
        defaultValue: true
    }
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

module.exports = User;
