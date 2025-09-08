const Kategori = require ('../models/Kategori');


const createKategori = async (req, res) => {
    try {
        const {namaKategori} = req.body;
        if (!namaKategori) {
            return res.status(400).json({msg: 'Nama kategori tidak boleh kosong'})
        }
        const kategori = await Kategori.create({namaKategori});
        res.status(201).json(kategori);
    } catch (error) {
        res.status(500).json({msg: 'Server Error', error: error.message})
    }
}

const getAllKategori = async (req, res) => {
    try {
        const kategori = await Kategori.findAll();
        res.status(200).json(kategori);
    } catch (error) {
        res.status(500).json({msg: 'Server Error', error: error.message})
    }
}

const getKategoriById = async (req, res) => {
    try {
        const kategori = await Kategori.findByPk(req.params.id);
        if (!kategori) {
            return res.status(404).json({msg: 'Kategori tidak ditemukan'})
        }
        res.status(200).json(kategori);
    } catch (error) {
        res.status(500).json({msg: 'Server Error', error: error.message})
    }
}

const updateKategori = async (req, res) => {
    try {
        const {namaKategori} = req.body;
        const kategori = await Kategori.findByPk(req.params.id);
        if (!kategori) {
            return res.status(404).json({msg: 'Kategori tidak ditemukan'})
        }
        kategori.namaKategori = namaKategori;
        await kategori.save();
        res.status(200).json(kategori);
    } catch (error) {
        res.status(500).json({msg: 'Server Error', error: error.message})
    }
}

const deleteKategori = async (req, res) => {
    try {
        const kategori = await Kategori.findByPk(req.params.id);
        if (!kategori) {
            return res.status(404).json({msg: 'Kategori tidak ditemukan'})
        }
        await kategori.destroy();
        res.status(200).json({msg: 'Kategori berhasil dihapus'})
    } catch (error) {
        res.status(500).json({msg: 'Server Error', error: error.message})
    }
}

module.exports = {
    createKategori,
    getAllKategori,
    getKategoriById,
    updateKategori,
    deleteKategori
}

