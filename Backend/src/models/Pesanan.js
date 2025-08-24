const { DataTypes } = require('sequelize');
const db = require('../../db/dbconfig.js');

const Pesanan = db.define('pesanan', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    total_harga: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Pesanan.associate = (models) => {
    Pesanan.belongsTo(models.User, { foreignKey: 'user_id' });
    Pesanan.hasMany(models.Detailpesanan, { foreignKey: 'pesanan_id' });
};

module.exports = Pesanan;
