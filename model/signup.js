const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Signup extends Model {}

Signup.init (
    {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        middlename: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        conf_password: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },

    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
    }
);

module.exports = Signup;