const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_Name: {  // Corregido el nombre del campo
        type: DataTypes.STRING,
        allowNull: false
    },
    last_Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true  // Valida que el campo sea un email
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE,  // Cambiado a DATE para almacenar fechas
    },
    // foto: {
    //     // Tipo de dato BLOB es para guardar la imagen en la base de datos y no un string de la URL
    //     type: DataTypes.BLOB,
    //     // no coloco allowNull por que al no colocar es como si lo pongo en true
    // },
});

module.exports = User;
