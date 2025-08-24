const Pesanan = require('../models/Kategori');
const Pesanan = require('../models/Pesanan');

// @desc    Membuat Kategori baru
// @route   POST /api/kategori
// @access  Private (nanti ditambahkan middleware)
const createPesanan = async (req, res) => {
    try {
        const {user_id} = req.body;

        if (!user_id) {
            return res.status(400).json({ msg: 'id tidak boleh kosong' });
        }

        const Pesanan = await Pesanan.create({ nama });
        res.status(201).json(Pesanan);
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

// @desc    Mendapatkan semua Kategori
// @route   GET /api/kategori
// @access  Public
const getAllPesanan = async (req, res) => {
    try {
        const Pesanan = await Pesanan.findAll();
        res.status(200).json(kategori);
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

// @desc    Mendapatkan Kategori berdasarkan ID
// @route   GET /api/kategori/:id
// @access  Public
const getPesananById = async (req, res) => {
    try {
        const Pesanan = await Pesanan.findByPk(req.params.id);

        if (!kategori) {
            return res.status(404).json({ msg: 'Kategori tidak ditemukan' });
        }

        res.status(200).json(kategori);
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

// @desc    Memperbarui Kategori
// @route   PUT /api/kategori/:id
// @access  Private (nanti ditambahkan middleware)
const updatePesanan = async (req, res) => {
    try {
        const { nama } = req.body;
        const kategori = await Kategori.findByPk(req.params.id);

        if (!Pesanan) {
            return res.status(404).json({ msg: 'Kategori tidak ditemukan' });
        }

        if (!Pesanan) {
            return res.status(400).json({ msg: 'Nama kategori tidak boleh kosong' });
        }

        Pesanan.nama = nama;
        await Pesanan.save();

        res.status(200).json(Pesanan);
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

// @desc    Menghapus Kategori
// @route   DELETE /api/kategori/:id
// @access  Private (nanti ditambahkan middleware)
const deletePesanan = async (req, res) => {
    try {
        const Pesanan = await Pesanan.findByPk(req.params.id);

        if (!Pesanan) {
            return res.status(404).json({ msg: 'Kategori tidak ditemukan' });
        }

        await Pesanan.destroy();
        res.status(200).json({ msg: 'Kategori berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

module.exports = {
    createPesanan,
    getAllPesanan,
    getPesananById,
    updatePesanan,
    deletePesanan
};
