const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const database = require('../database/database');

const Ponto = database.define('ponto',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING,

    },
    valor:{
        type: DataTypes.FLOAT,

    },
    org:{
        type: DataTypes.STRING,

    },
    data:{
        type: DataTypes.STRING,

    },
    geometry:{
        type: Sequelize.GEOMETRY,

    }
});

module.exports = Ponto;