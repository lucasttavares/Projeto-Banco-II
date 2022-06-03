const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const database = require('../database/database');
/* const query = `select ST_x(geometria) as lat, select ST_y(geometria) as lng from "pontos"` */

const Ponto = database.define('ponto',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    valor:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    org:{
        type: DataTypes.STRING,
        allowNull: false
    },
    data:{
        type: DataTypes.STRING,
        allowNull: false
    },
    geometria:{
        type: Sequelize.GEOMETRY,
        allowNull: false
    }
});

module.exports = Ponto;