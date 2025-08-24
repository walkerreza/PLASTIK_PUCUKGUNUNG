const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

// Setup koneksi Sequelize
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT|| "mysql", // fallback jaga-jaga
    port: parseInt(process.env.DB_PORT, 10), // Mengubah string menjadi number
    logging: false, // Matikan logging query SQL di console
    define: {
      timestamps: false,        // nggak auto bikin createdAt/updatedAt
      freezeTableName: true     // biar nama tabel gak diubah jadi jamak
    },
    pool: {
      max: 5, // Maksimal 5 koneksi
      min: 0, // Minimal 0 koneksi
      acquire: 30000, // Waktu maksimal (ms) untuk mendapatkan koneksi sebelum error
      idle: 10000 // Waktu maksimal (ms) koneksi bisa idle sebelum dilepaskan
    }
  }
);

// Tes koneksi
(async () => {
  try {
    await db.authenticate();
    console.log("✅ Database connected successfully (Sequelize)");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
})();

module.exports = db;
