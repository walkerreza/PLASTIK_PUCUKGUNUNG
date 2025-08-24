const { DataTypes } = require('sequelize');
const db = require('../../db/dbconfig.js');

const Detailpesanan = db.define('detailpesanan', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pesanan_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    barang_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Detailpesanan.associate = (models) => {
    Detailpesanan.belongsTo(models.Pesanan, { foreignKey: 'pesanan_id' });
    Detailpesanan.belongsTo(models.Barang, { foreignKey: 'barang_id' });
};

module.exports = Detailpesanan;
