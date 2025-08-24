const { DataTypes } = require('sequelize');
const db = require('../../db/dbconfig.js'); // Path diperbaiki

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }
});

User.associate = (models) => {
    User.hasMany(models.Pesanan, { foreignKey: 'user_id' });
};


module.exports = User; // Ekspor dengan cara CommonJS