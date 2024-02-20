const { DataTypes } = require('sequelize');
const sequelize = require('../core/connection/mysqldb');

const UserModel = sequelize.define('user', {
  idUser: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  idLicence: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idTemplate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  mail: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(16),
    allowNull: false,
  },
  idStatus: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  }
}, {
  freezeTableName: true,
  tableName: 'user'
});

module.exports = UserModel;
