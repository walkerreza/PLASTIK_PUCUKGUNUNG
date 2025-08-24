const { DataTypes } = require('sequelize');
const db = require('../../db/dbconfig.js');

const Kategori = db.define('kategori', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Kategori.associate = (models) => {
    Kategori.hasMany(models.Barang, { foreignKey: 'kategori_id' });
}
module.exports = Kategori;
