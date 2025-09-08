//import
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('../db/dbconfig');

// 1. Impor semua model
const User = require('./models/User');
const Kategori = require('./models/Kategori');
const Barang = require('./models/Barang');
const Pesanan = require('./models/Pesanan');
const Detailpesanan = require('./models/Detailpesanan');

// Impor Rute
const kategoriRoutes = require('./routes/KategoriRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 2. Kumpulkan semua model dalam satu objek
const models = {
    User,
    Kategori,
    Barang,
    Pesanan,
    Detailpesanan
};

// 3. Jalankan fungsi associate untuk setiap model
Object.values(models)
    .filter(model => typeof model.associate === 'function')
    .forEach(model => model.associate(models));

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/api/health', (req, res) => {
    res.status(200).json({ message: 'Backend is healthy and running.' });
});

// Gunakan Rute
app.use('/api/kategori', kategoriRoutes);

// 4. Sinkronkan DB dan jalankan server
const startServer = async () => {
    try {
        // alter: true akan mencoba mengubah tabel agar sesuai, lebih aman dari force: true
        await db.sync({ alter: true }); 
        console.log('✅ All models were synchronized successfully.');
        
        app.listen(port, () => {
            console.log(`🚀 Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('❌ Unable to start the server:', error);
    }
};

startServer();
