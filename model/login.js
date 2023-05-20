const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { DataTypes, DataTypes, DataTypes } = require('sequelize/types');

class Login extends Model {}

Login.init (
    {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },

    {
        sequelize,
        timestamps: true,
        freezeTableName: true
    }
);

module.exports = Login;