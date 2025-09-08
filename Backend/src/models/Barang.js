const { DataTypes } = require('sequelize');
const db = require('../../db/dbconfig.js');

const Barang = db.define('barang', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    kategori_id: {
        type : DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'kategori',
            key: 'id'
        }
    },
    harga: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stok: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gambar :{
        type: DataTypes.BLOB('medium'),
        allowNull: true
    },
    deskripsi :{
        type: DataTypes.TEXT,
        allowNull: true
    },
    kondisiBarang :{
        type: DataTypes.ENUM('Baru', 'Retur'),
        allowNull: false
    },
    
});

Barang.associate = (models) => {
    Barang.belongsTo(models.Kategori, { foreignKey: 'kategori_id' });
    Barang.hasMany(models.Detailpesanan, { foreignKey: 'barang_id' });
};

module.exports = Barang;
